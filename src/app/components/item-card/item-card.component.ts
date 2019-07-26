import { Component, Input } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'item-card',
  template: `
    <div
      class="item-background"
      [ngStyle]="{'background-image': 'url(' + item?.imageUrl + ')'}"
    ></div>
    <section class="item-content">
      <h3>{{ item?.title }}</h3>
      <h6>{{ item?.score }}</h6>
      <p>{{ item?.text }}</p>
    </section>
  `,
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent {
  @Input()
  item: Item;
}
