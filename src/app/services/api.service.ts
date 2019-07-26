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

  getMovies() {
    return this.http.get('../assets/mock.json');
  }

  getPopularMovies() {
    const url = `${this.BASE_URL}/popular?api_key=${this.API_KEY}`;
    return this.http.get(url);
  }
}
