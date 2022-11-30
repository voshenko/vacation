import React, { useState } from 'react';
import { Group, Text } from '@mantine/core';
import { Container, Typography, TextField, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '@mantine/form';
import { register } from '../../services/api.service';
import { UserAlreadyExistsError } from '../../errors/user-already-exists-error';

interface RegisterProps {
  onRegister: () => void;
}

export const Register: React.FC<RegisterProps> = ({ onRegister }) => {
  const [registerError, setRegisterError] = useState<string>('');
  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },
  });
  const navigate = useNavigate();

  const handleSubmit = async (values: { username: string; password: string }) => {
    try {
      setRegisterError('');
      await register(values.username, values.password);
      onRegister();
      navigate('/');
    } catch (err: any) {
      if (err instanceof UserAlreadyExistsError) {
        setRegisterError(err.message);
      }
    }
  };

  return (
    <Container maxWidth="xs">
      <br />
      <Typography variant='h3'>
        Register
      </Typography>

      <form onSubmit={form.onSubmit(handleSubmit)} >
        <TextField
          {...form.getInputProps('username')}
          margin='normal'
          fullWidth
          required
          label="Username"
          error={!!registerError} />
        <TextField
          {...form.getInputProps('password')}
          margin='normal'
          fullWidth
          required
          label="Password"
          error={registerError} />

        <Group position="right" mt="md">
          <Button type="submit" fullWidth variant='contained' color='primary'>Register</Button>
          <p>Already registered before?</p>
          <Text variant="link" component={Link} to="/login">
            Login
          </Text>
        </Group>
      </form>
    </Container>
  );
};
