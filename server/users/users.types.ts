import { z } from 'zod';
import { user, userData, follower } from './users.schema';

export type User = z.infer<typeof user>;
export type Follower = z.infer<typeof follower>;
export type UserData = z.infer<typeof userData>;
