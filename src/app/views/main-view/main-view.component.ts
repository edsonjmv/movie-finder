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
      [title]="'Movie Finder'"
    ></header-bar>

    <sidebar-list
      [title]="'Last searches:'"
    ></sidebar-list>
    
    <items-finder
      [placeholderText]="'Search a movie...'"
      [items]="items"
      [loading]="loadingSearch"
      (submitSearch)="searchMovies($event)"
    ></items-finder>
  `,
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];

  items: Item[] = [];

  loadingSearch: boolean = true;

  constructor(private apiService: ApiService, private store: StoreService) { }

  ngOnInit() {
    this.subscribeEvents();
    this.getPopularMovies();
  }

  subscribeEvents() {
    const subscription: Subscription = this.store.clickItem().subscribe(search => this.searchMovies(search));
    this.addSubscription(subscription);
  }

  getPopularMovies() {
    const subscription: Subscription = this.apiService.getPopularMovies().subscribe((res: ApiResponse) => {
      this.loadingSearch = false;
      const { results } = res;
      if (results) {
        this.items = this.createItemsList(results);
      }
    }, error => {
      console.log(error);
      this.loadingSearch = false;
    })

    this.addSubscription(subscription);
  }

  searchMovies(inputText: string) {
    this.items = [];
    this.loadingSearch = true;

    const subscription: Subscription = this.apiService.getMoviesSearch(inputText).subscribe((res: ApiResponse) => {
      this.loadingSearch = false;
      const { results } = res;
      if (results && results.length > 0) {
        this.store.addItem(inputText);
        this.items = this.createItemsList(results);
      }
    }, error => {
      console.log(error);
      this.loadingSearch = false;
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
