import { Component, Input } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'item-card',
  template: `
    <h3>{{ item?.title }}</h3>
    <h6>{{ item?.subtitle }}</h6>
    <p>{{ item?.text }}</p>
    <span>{{ item?.score }}</span>
  `,
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent {
  @Input()
  item: Item;
}
