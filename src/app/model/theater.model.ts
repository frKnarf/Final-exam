import { Movie } from './movie.model';
import { SeatData } from './seat-data.model';

export interface Theater {
  shows: any;
  id: number;
  name: string;
  movie: Movie;
  seatPrice: number;
  seatData: SeatData;
}
