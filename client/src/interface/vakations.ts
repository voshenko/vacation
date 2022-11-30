export interface INVacations {
   id: number;
   destination: string;
   description: string;
   image: string;
   start_date: string;
   end_date: string;
   price: number;
   isFollowed?: boolean;
   amountOfFollowers: number;
}