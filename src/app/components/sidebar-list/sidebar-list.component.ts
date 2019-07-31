import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sidebar-list',
  template: `
    <h4>{{ title }}</h4>
    <ul>
      <li
        *ngFor="let item of items" 
        (click)="clickItem(item)"
        [ngClass]="{ 'active-item': item === activeItem }">
        {{ item }}
      </li>
    </ul>
  `,
  styleUrls: ['./sidebar-list.component.scss']
})
export class SidebarListComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  items: string[] = [];

  activeItem: string = '';

  @Input()
  title: string;

  constructor(private store: StoreService) { }

  ngOnInit() {
    this.subscribeEvents();
  }

  subscribeEvents() {
    const itemsSubsc: Subscription = this.store.getItems().subscribe(items => this.items = items);
    const actualSubsc: Subscription = this.store.getActiveItem().subscribe(item => this.activeItem = item);
    this.addSubscription(itemsSubsc);
    this.addSubscription(actualSubsc);
  }

  clickItem(item: string) {
    this.store.emitClickItem(item);
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
