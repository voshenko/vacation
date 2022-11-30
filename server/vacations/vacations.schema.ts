import { z } from 'zod';

export const vacation = z.object({
  id: z.number(),
  destination: z.string(),
  description: z.string().min(10).max(40),
  image: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  price: z
    .string()
    .transform(Number)
});


export const getVacationOptions = z.object({
  destination: z.string().optional().default(''),
  minPrice: z
    .string()
    .optional()
    .default('0')
    .transform((v: string) => +v),
  maxPrice: z
    .string()
    .optional()
    .default('5000')
    .transform((v: string) => +v),
});



export const vacationsParams = z.object({
  id: z.string(),
});
