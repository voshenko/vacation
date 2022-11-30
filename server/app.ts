import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { logger } from './middlewares/logger';
import { notFound } from './middlewares/not-found';
import { vacationsRouter } from './vacations/vacations.controller';
import { usersRouter } from './users/users.controller';
import { errorHandler } from './middlewares/error-handler';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }),
);

app.use(logger);
app.use(express.json());
app.use(cookieParser('secret'));
app.use('/user/myvacation', usersRouter);
app.use('/vacations', vacationsRouter);
app.use('/user', usersRouter);
app.use(notFound);
app.use(errorHandler);
app.listen(3001, () => {
  console.log('Service is listening....');
});
