import { Component, Input } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'item-card',
  template: `
    <img [src]="item?.image" alt="Image of {{ item?.title }}">
    <section class="description">
      <h3>{{ item?.title }}</h3>
      <h6>{{ item?.subtitle }}</h6>
    </section>
  `,
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent {
  @Input()
  item: Item;
}
