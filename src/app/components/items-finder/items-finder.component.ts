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

    <items-list
      [items]="items"
    ></items-list>
  `,
  styleUrls: ['./items-finder.component.scss']
})
export class ItemsFinderComponent {
  @Input()
  items: Item[];

  @Input()
  placeholderText: string;

  @Output()
  submitSearch: EventEmitter<any> = new EventEmitter();
}
