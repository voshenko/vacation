import { asyncQuery } from '../db';
import { User } from './users.types';


export async function getByUsername(username: string) {
  const sql = 'SELECT * FROM users WHERE username = ?';
  const users = await asyncQuery<User[]>(sql, [username]);
  return users[0];
}

export async function createUser(user: User) {
  const sql = 'INSERT INTO users (username, password ,user_type) VALUES (?, ? ,"USER")';

  await asyncQuery<User>(sql, [user.username, user.password]);
  return user;
}


