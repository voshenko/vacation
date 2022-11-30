import { z } from 'zod';
import { vacation, getVacationOptions, vacationsParams } from './vacations.schema';

export type Vacation = z.infer<typeof vacation>;



export type GetVacationOptions = z.infer<typeof getVacationOptions>;



export type GetVacationQuery = GetVacationOptions;

export type VacationParams = z.infer<typeof vacationsParams>;
