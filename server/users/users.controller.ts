import express from 'express';
import { authenticator } from '../middlewares/authentication';
import { register, verifyUser } from './users.bl';
import * as schema from './users.schema';
import { UserData } from './users.types';
import { config } from '../config';
import { GetAllVacations } from '../vacations/vacations.dal';

export const usersRouter = express.Router();

usersRouter.post<{}, {}, UserData>('/register', async (req, res, next) => {
  try {
    const userData = schema.userData.parse(req.body);
    await register(userData);
    res.cookie('username', userData.username, {
      signed: true,
      httpOnly: true,
      maxAge: config.maxCookieAge,
    });
    return res.sendStatus(201);

  } catch (err) {
    next(err);
  }
});



usersRouter.post<{}, {}, UserData>('/login', async (req, res, next) => {
  try {
    const userData = schema.userData.parse(req.body);
    const user = await verifyUser(userData);


    res.cookie('username', user.username, {
      signed: true,
      httpOnly: true,
      maxAge: config.maxCookieAge,
    });

    return res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});
usersRouter.get<{}, {}, UserData>('/myvacation', async (req, res, next) => {
  try {
    const userData = schema.userData.parse(req.body);
    const user = await verifyUser(userData);
    await GetAllVacations(user.username);
  } catch (err) {
    next(err);
  }
});



usersRouter.post('/logout', (req, res, next) => {
  res.clearCookie('username', {
    signed: true,
    httpOnly: true,
  });
  return res.sendStatus(200);
});

usersRouter.get<{}, { username: string }>('/me', authenticator, (req, res, next) => {
  return res.status(200).json({ username: (req as any).username });
});


