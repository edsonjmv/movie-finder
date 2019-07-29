import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';
import { ApiService } from 'src/app/services/api.service';
import { Movie, ApiResponse } from 'src/app/models/api-interfaces';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'mf-main-view',
  template: `
    <header-bar
      [title]="title"
    ></header-bar>

    <sidebar-list
      [title]="'Last searches:'"
    ></sidebar-list>
    
    <items-finder
      [placeholderText]="'Search a movie...'"
      [items]="items"
      (submitSearch)="searchMovies($event)"
    ></items-finder>
  `,
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];

  items: Item[] = [];

  title: string = 'Movie Finder';

  constructor(private apiService: ApiService, private store: StoreService) { }

  ngOnInit() {
    this.getPopularMovies();
  }

  getPopularMovies() {
    const subscription = this.apiService.getPopularMovies().subscribe((res: ApiResponse) => {
      const { results } = res;
      if (results) {
        this.items = this.createItemsList(results);
      }
    }, error => {
      console.log(error);
    })
    this.addSubscription(subscription);
  }

  searchMovies(inputText: string) {
    this.items = [];
    const subscription = this.apiService.getMoviesSearch(inputText).subscribe((res: ApiResponse) => {
      const { results } = res;
      if (results && results.length > 0) {
        this.store.addSearch(inputText);
        this.items = this.createItemsList(results);
      }
    }, error => {
      console.log(error);
    })

    this.addSubscription(subscription);
  }

  createItemsList(movies: Movie[]): Item[] {
    const items: Item[] = movies.map((movie: Movie) => {
      const { overview, release_date, title, vote_average } = movie;
      const item = new Item(vote_average, release_date, overview, title);
      return item;
    })

    return [...items];
  }

  addSubscription(subscription: Subscription) {
    this.subscriptions.push(subscription);
  }

  ngOnDestroy() {
    this.subscriptions.map(subscription => {
      subscription.unsubscribe();
    })
  }
}
