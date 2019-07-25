import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Movie } from 'src/app/interfaces/movie-interface';

@Component({
  selector: 'mf-items-search',
  templateUrl: './items-search.component.html',
  styleUrls: ['./items-search.component.scss']
})
export class ItemsSearchComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.apiService.getMovies().subscribe(res => {
      console.log(res);
      this.movies = res['movies'] ? [ ...res['movies'] ] : [];
      console.log(this.movies);
    }, error => {
      console.log(error);
    })
  }

}
