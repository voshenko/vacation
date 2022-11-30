import { Vacation, GetVacationOptions, GetVacationQuery } from './vacations.types';
import * as vacationDal from './vacations.dal';

export async function getVacations(options: GetVacationOptions): Promise<Vacation[]> {
  const destination = options.destination?.toLowerCase() || '';
  const minPrice = +(options.minPrice || 0);
  const maxPrice = +(options.maxPrice || 9999999);
  return vacationDal.gatVacation({ destination, minPrice, maxPrice });
}
