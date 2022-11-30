import { optional, string, z } from 'zod';

export const user = z.object({
  username: z.string(),
  password: z.string().min(1).max(45),
});
export const follower = z.object({
  username: z.string()
})

export const userData = user;
