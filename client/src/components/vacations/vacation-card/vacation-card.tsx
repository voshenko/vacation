import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { INVacations } from '../../../interface/vakations';

interface VacationCardProps {
   vacation: INVacations;
}

export const VacationCard: React.FC<VacationCardProps> = ({ vacation }) => {

   return (
      <Card sx={{ Width: 350, Height: 300 }}>
         <CardActionArea>
            <CardMedia
               component="img"
               height="200"
               src={vacation.image}
               alt="tmuna"
            />
            <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                  {vacation.destination}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                  {vacation.description}
               </Typography>
               <Typography gutterBottom variant="h6" component="div">
                  Price: {vacation.price} $ <br />
                  <Typography variant="body2" color="text.secondary" >
                     For choose date fly follow me
                  </Typography>
               </Typography>
               <Typography variant="body2" color="text.secondary">
               </Typography>
            </CardContent>
         </CardActionArea>
         <CardActions>
            <Button size="small" color="primary">
               Follow
            </Button>
         </CardActions>
      </Card>
   );
}


