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
      (submitSearch)="getMovies($event)"
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
    this.getMovies('batman');
  }

  subscribeEvents() {
    const subscription: Subscription = this.store.clickItem().subscribe(search => this.getMovies(search));
    this.addSubscription(subscription);
  }

  getMovies(inputText: string) {
    this.items = [];
    this.loadingSearch = true;
    this.store.activateItem('');

    const subscription: Subscription = this.apiService.getMovies(inputText).subscribe((res: ApiResponse) => {
      this.loadingSearch = false;
      const { Search } = res;
      if (Search && Search.length > 0) {
        this.store.addItem(inputText);
        this.items = this.createItemsList(Search);
      }
    }, error => {
      console.log(error);
      this.loadingSearch = false;
    })

    this.addSubscription(subscription);
  }

  createItemsList(movies: Movie[]): Item[] {
    const items: Item[] = movies.map((movie: Movie) => {
      const { Poster, Year, Title, Type } = movie;
      const item = new Item(
        Poster,
        this.formatText(Type, Year),
        Title
      );
      return item;
    })

    return [...items];
  }

  formatText(primaryText: string, secondaryText: string): string {
    let formatted: string = '';
    if (primaryText && secondaryText) {
      formatted = `${primaryText.toUpperCase()} | ${secondaryText}`;
    }
    return formatted;
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
