import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/models/item';
import { Movie } from 'src/app/models/movie-interface';

@Component({
  selector: 'mf-main-view',
  template: `
    <header-bar></header-bar>

    <sidebar-list></sidebar-list>
    
    <items-finder
      [items]="items"
    ></items-finder>
  `,
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  items: Item[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.subscription = this.apiService.getMovies().subscribe(res => {
      if (res['movies']) {
        this.items = this.createItemsList(res['movies']);
      }
    }, error => {
      console.log(error);
    })
  }

  createItemsList(movies: Movie[]): Item[] {
    const items: Item[] = movies.map((movie: Movie) => {
      const { image_url, rating, year, name } = movie;
      const item = new Item(image_url, rating, year, name);
      return item;
    })

    return [...items];
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
