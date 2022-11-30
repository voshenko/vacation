import express from 'express';
import path from 'path';
import multer, { diskStorage } from 'multer';
import { v4 as uuid } from 'uuid';
import * as schema from './vacations.schema';
import { Vacation, GetVacationQuery } from './vacations.types';
import { getVacations } from './vacations.bl';


const storage = diskStorage({
  filename: (req, file, cb) => {
    const fileName = `${uuid()}${path.extname(file.originalname)}`;
  },
});
const upload = multer({
  storage,
});

export const vacationsRouter = express.Router();




vacationsRouter.get<{}, Vacation[], {}, GetVacationQuery>('/', async (req, res, next) => {
  try {
    const options = schema.getVacationOptions.parse(req.query);
    const vacations = await getVacations(options);
    return res.status(200).json(vacations);
  } catch (err) {
    next(err);
  }
});


