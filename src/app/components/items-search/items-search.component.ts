import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Item } from '../../models/item';

@Component({
  selector: 'mf-items-search',
  template: `
    <input-search
      [placeholderText]="'Search a movie...'"
      [buttonText]="'Search'">
    </input-search>

    <items-list
      *ngIf="items && items.length > 0"
      [items]="items"
    ></items-list>
  `,
  styleUrls: ['./items-search.component.scss']
})
export class ItemsSearchComponent implements OnInit {
  items: Item[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.apiService.getMovies().subscribe(res => {
      console.log(res);
    }, error => {
      console.log(error);
    })
  }

}
