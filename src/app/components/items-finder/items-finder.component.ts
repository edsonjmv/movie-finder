import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'items-finder',
  template: `
    <input-search
      [placeholderText]="placeholderText"
      [buttonText]="'Search'"
      (submitSearch)="submitSearch.emit($event)">
    </input-search>

    <p class="empty-message" *ngIf="!items || items.length === 0">
      <ng-container *ngIf="loading; else noResults">Loading...</ng-container>
      <ng-template #noResults>No results found.</ng-template>
    </p>

    <items-list
      [items]="items">
    </items-list>
  `,
  styleUrls: ['./items-finder.component.scss']
})
export class ItemsFinderComponent {
  @Input()
  items: Item[];

  @Input()
  placeholderText: string;

  @Input()
  loading: boolean;

  @Output()
  submitSearch: EventEmitter<string> = new EventEmitter();
}
