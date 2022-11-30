import React, { useState } from 'react';
import { Group, Text } from '@mantine/core';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from '@mantine/form';
import { Container, Typography, TextField, Button } from '@mui/material';
import { login } from '../../services/api.service';
import { UnauthorizedError } from '../../errors/unauthorized';

interface LoginProps {
  onLogin: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [loginError, setLoginError] = useState<string>('');
  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },
  });

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (values: { username: string; password: string }) => {
    try {
      setLoginError('');
      await login(values.username, values.password);
      localStorage.setItem('loginAt', new Date().toISOString());
      onLogin();
      navigate((location.state as any).from);
    } catch (err: any) {
      if (err instanceof UnauthorizedError) {
        setLoginError(err.message);
      }
    }
  };

  return (
    <Container maxWidth="xs">
      <br />
      <Typography variant='h3'>
        Login
      </Typography>

      <form onSubmit={form.onSubmit(handleSubmit)} >
        <TextField margin='normal' fullWidth required label="Username" {...form.getInputProps('username')} error={!!loginError} />
        <TextField margin='normal' fullWidth required label="Password" {...form.getInputProps('password')} error={loginError} />

        <Group position="right" mt="md">
          <Button type="submit" fullWidth variant='contained' color='primary'>Submit</Button>
          <p>You don't have a username yet?</p>
          <Text variant="link" component={Link} to="/register">
            Register
          </Text>
        </Group>
      </form>

    </Container>
  );
};
