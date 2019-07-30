import { Component, Input } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'item-card',
  template: `
    <img [src]="item?.image" alt="Image of {{ item?.title }}">
    <h2>{{ item?.title }}</h2>
    <h4>{{ item?.subtitle }}</h4>
  `,
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent {
  @Input()
  item: Item;
}
