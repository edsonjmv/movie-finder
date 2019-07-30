import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASE_URL: string = environment.BASE_URL;
  API_KEY: string = environment.API_KEY;

  constructor(private http: HttpClient) { }

  getPopularMovies() {
    const url = `${this.BASE_URL}/movie/popular${this.API_KEY}`;
    return this.http.get(url);
  }

  getMoviesSearch(query: string) {
    const url = `${this.BASE_URL}/search/movie${this.API_KEY}&query=${query}`;
    return this.http.get(url);
  }

  getMovies(query: string) {
    const url = `${environment.OMDB_URL}&s=${query}&plot=full`;
    return this.http.get(url);
  }
}
