import { Component, Input } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'mf-items-list',
  template: `
    <mf-item-card 
      *ngFor="let item of items"
      [item]="item">
    </mf-item-card>
  `,
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent {
  @Input()
  items: Item[];
}
