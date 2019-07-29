import { Component, Input } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'sidebar-list',
  template: `
    <h4>{{ title }}</h4>
    <ul>
      <li *ngFor="let item of items" (click)="clickItem(item)"> {{ item }} </li>
    </ul>
  `,
  styleUrls: ['./sidebar-list.component.scss']
})
export class SidebarListComponent {
  items: string[] = [];

  @Input()
  title: string;

  constructor(private store: StoreService) { }

  ngOnInit() {
    this.store.getSearchList().subscribe(newList => this.items = newList);
  }

  clickItem(item) {
    console.log(item);
  }
}
