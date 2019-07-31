import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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
  unsubscribe$ = new Subject<void>();

  items: string[] = [];

  activeItem: string = '';

  @Input()
  title: string;

  constructor(private store: StoreService) { }

  ngOnInit() {
    this.subscribeEvents();
  }

  subscribeEvents() {
    this.store.getItems()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(items => this.items = items);

    this.store.getActiveItem()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(item => this.activeItem = item);
  }

  clickItem(item: string) {
    this.store.emitClickItem(item);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
