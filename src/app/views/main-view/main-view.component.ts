import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { StoreService } from 'src/app/services/store.service';
import { ApiService } from 'src/app/services/api.service';
import { HelperService } from 'src/app/services/helper.service';
import { ApiResponse } from 'src/app/models/api-interfaces';
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
      [placeholderText]="'Search movies...'"
      [items]="items"
      [loading]="loadingSearch"
      (submitSearch)="getMovies($event)"
    ></items-finder>
  `,
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit, OnDestroy {
  unsubscribe$ = new Subject<void>();

  items: Item[] = [];

  loadingSearch: boolean = true;

  constructor(
    private apiService: ApiService,
    private store: StoreService,
    private helper: HelperService
  ) { }

  ngOnInit() {
    this.subscribeEvents();
    this.getMovies('wall street');
  }

  subscribeEvents() {
    this.store.clickItem()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(search => this.getMovies(search));
  }

  getMovies(inputText: string) {
    this.items = [];
    this.loadingSearch = true;
    this.store.activateItem('');

    this.apiService.getMovies(inputText)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res: ApiResponse) => {
        this.handleResponse(inputText, res);
      }, error => {
        console.log(error);
      }).add(() => {
        this.loadingSearch = false;
      })
  }

  handleResponse(inputText: string, res: ApiResponse) {
    const { Search } = res;
    if (Search && Search.length > 0) {
      this.store.addItem(inputText);
      this.items = this.helper.generateItemsFromMovies(Search);
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
