import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { Grid, Button } from '@mantine/core';
import { getAllVacations } from '../../services/api.service';
import { VacationCard } from './vacation-card/vacation-card';
import { INVacations } from '../../interface/vakations';


interface VacationsProps {
  username: string;
}


export const Vacations: React.FC<VacationsProps> = ({ username }) => {
  const [vacations, setVacations] = useState<INVacations[]>([]);
  const getVacationList = async () => {
    const vacationsFromApi = await getAllVacations();
    setVacations(vacationsFromApi);
  };
  useEffect(() => {
    getVacationList();
  }, []);
  return (
    <>
      <Typography variant='h4' align='center'> All Destination around the world</Typography>
      <Grid>
        {vacations.map((v) => (
          <Grid.Col key={v.id} span={4}>
            <VacationCard
              vacation={v}
            />
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
};

