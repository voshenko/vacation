import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppShell } from '@mantine/core';
import { Routing } from '../routing/routing';
import { me, logout } from '../../services/api.service';
import { UnauthorizedError } from '../../errors/unauthorized';
import { Navbar } from '../navbar/navbar';
import { useExpiredCookie } from '../../hooks/useExpiredCookie';



const path = window.location.pathname;

export const Layout: React.FC = () => {
   const [user, setUser] = useState<string>();
   useExpiredCookie();
   const navigate = useNavigate();

   const checkLogin = async () => {
      try {

         const { username } = await me();
         setUser(username);
      } catch (err) {
         if (err instanceof UnauthorizedError) {
            setUser('');
            navigate(`/login`, { state: { from: path } });
         }
      }
   };

   const onLogout = async () => {
      await logout();
      setUser('');
      navigate('/');
      localStorage.removeItem('loginAt');
   };

   useEffect(() => {
      checkLogin();
   }, [user]);

   return (

      <AppShell
         padding="md"
         navbar={<Navbar user={user} onLogout={onLogout} />}
         styles={(theme) => ({
            main: {
               backgroundColor: theme.colors.blue[0]
            },
         })}
      >
         <Routing user={user} onLogin={checkLogin} onRegister={checkLogin} />
      </AppShell >
   );
};


