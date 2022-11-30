import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Text } from '@mantine/core';
import { Login } from '../login/login';
import { Register } from '../register/register';
import { Vacations } from '../vacations/vacations';
import { FollowVacations } from '../vacations/follow.vacations';

interface RoutingProps {
  user?: string;
  onLogin: () => void;
  onRegister: () => void;
}

export const Routing: React.FC<RoutingProps> = ({ user, onLogin, onRegister }) => {
  return (
    <Routes>
      {user === '' && (
        <>
          <Route path="/login" element={<Login onLogin={onLogin} />} />
          <Route path="/register" element={<Register onRegister={onRegister} />} />
        </>
      )}
      {!!user && (
        <>
          <Route path="/" element={<Text>Destination</Text>} />
          <Route path="/myvacation" element={<FollowVacations username={user} />} />
          <Route path="/vacations" element={<Vacations username={user} />} />
        </>
      )}
      <Route path="/*" element={null} />
    </Routes>
  );
};
