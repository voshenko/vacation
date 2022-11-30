import React from 'react';
import { Button, Navbar as MantineNavbar, NavLink } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import { Typography } from '@mui/material';

interface NavbarProps {
  user?: string;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ user, onLogout }) => {
  const location = useLocation();
  return !!user ? (
    <MantineNavbar width={{ base: 300 }} height={'100%'} p="md">
      <Typography variant='h5' >{user}, Hello!!!</Typography>
      <NavLink label="Destination" component={Link} to="/vacations" active={location.pathname === '/vacations'} />
      <NavLink label="My Vacation" component={Link} to="/myvacation" active={location.pathname === '/myvacation'} />
      <Button onClick={onLogout} >Logout</Button>
    </MantineNavbar>
  ) : (
    <></>
  );
};
