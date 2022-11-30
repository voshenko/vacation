import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { Grid } from '@mantine/core';
import { getFollowVacations } from '../../services/api.service';
import { VacationCard } from './vacation-card/vacation-card';
import { INVacations } from '../../interface/vakations';


interface VacationsProps {
   username: string;
}

export const FollowVacations: React.FC<VacationsProps> = ({ username }) => {
   const [vacations, setVacations] = useState<INVacations[]>([]);
   const getVacationList = async () => {
      const vacationsFromApi = await getFollowVacations();
      setVacations(vacationsFromApi);
   };
   useEffect(() => {
      getVacationList();
   }, []);
   return (
      <>
         <Typography variant='h4' align='center'> My Vacations</Typography>
         <Grid>
            {vacations.map((v) => (
               <Grid.Col span={4}>
                  <VacationCard
                     vacation={v}
                  />
               </Grid.Col>
            ))}
         </Grid>
      </>
   );
};


