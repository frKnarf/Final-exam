import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Theater } from './theater.model';
import { Show } from './show.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private baseUrl = 'https://cpsu-test-api.herokuapp.com/api/camt2023';

  constructor(private http: HttpClient) {}

  getTheaters(): Observable<Theater[]> {
    return this.http.get<Theater[]>(`${this.baseUrl}/theaters`);
  }

  getShows(): Observable<Show[]> {
    return this.http.get<Show[]>(`${this.baseUrl}/shows`);
  }
}
