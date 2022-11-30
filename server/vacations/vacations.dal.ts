import { asyncQuery } from '../db';
import { Vacation, GetVacationOptions } from './vacations.types';




export async function GetAllVacations(username: string) {
  const sql = ' SELECT  v.id,v.destination,v.description,v.image,v.start_date, v.end_date,  v.price  FROM vacations v  join followers f on f.vacation_id = v.id  join users u on u.id = f.user_id  where u.username = ?';
  const allVacations = await asyncQuery<Vacation>(sql, [username]);
  return allVacations;
}










export async function gatVacation(options: GetVacationOptions) {
  const sql = `SELECT * FROM vacations WHERE (price BETWEEN ? AND ?) `;
  return asyncQuery<Vacation[]>(sql, [options.minPrice, options.maxPrice, `%${options.destination}%`]);
}


