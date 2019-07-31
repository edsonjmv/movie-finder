import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getMovies(query: string) {
    const url = `${environment.OMDB_URL}&s=${query}&plot=full`;
    return this.http.get(url);
  }
}
