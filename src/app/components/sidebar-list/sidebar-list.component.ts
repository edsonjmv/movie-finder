import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Subscription } from 'rxjs';

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
export class SidebarListComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  items: string[] = [];

  @Input()
  title: string;

  constructor(private store: StoreService) { }

  ngOnInit() {
    this.subscription = this.store.getItems().subscribe(newList => this.items = newList);
  }

  clickItem(item: string) {
    this.store.emitClickItem(item);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
