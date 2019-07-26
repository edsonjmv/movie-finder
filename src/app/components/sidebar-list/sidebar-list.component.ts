import { Component, Input } from '@angular/core';

@Component({
  selector: 'sidebar-list',
  template: `
    <h4>{{ title }}</h4>
    <ul>
      <li *ngFor="let item of items"> {{ item }} </li>
    </ul>
  `,
  styleUrls: ['./sidebar-list.component.scss']
})
export class SidebarListComponent {
  @Input()
  title: string;

  @Input()
  items: string[];
}
