import { Component, Input } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'items-list',
  template: `
    <item-card 
      *ngFor="let item of items"
      [item]="item">
    </item-card>
  `,
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent {
  @Input()
  items: Item[];
}
