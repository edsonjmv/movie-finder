import { Component, Input } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'items-finder',
  template: `
    <input-search
      [placeholderText]="'Search a movie...'"
      [buttonText]="'Search'">
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
}
