import { useEffect, useState } from 'react';

export const useExpiredCookie = () => {
   const [timerId, setTimerId] = useState<NodeJS.Timer>();

   useEffect(() => {
      const timer = setInterval(() => {
         const loginAt = localStorage.getItem('login');
         if (loginAt) {
            const dateTime = Date.parse(loginAt);
            const now = Date.parse(new Date().toISOString());
            const diff = now - dateTime;
            const isExpired = diff > 10000 * 10000;
            console.log('login');
            if (isExpired) {
               console.log('isExpired');
               localStorage.removeItem('login');
               window.location.reload();
            }
         }
      }, 1000);
      setTimerId(timer);
      return () => {
         if (timerId) {
            clearInterval(timerId);
         }
      };
   }, []);
};
