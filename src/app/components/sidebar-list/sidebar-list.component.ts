import { Component } from '@angular/core';

@Component({
  selector: 'sidebar-list',
  template: `
    <h4>Last searches:</h4>
    <ul>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
      <li>item 4</li>
      <li>item 5</li>
      <li>item 6</li>
      <li>item 7</li>
      <li>item 8</li>
    </ul>
  `,
  styleUrls: ['./sidebar-list.component.scss']
})
export class SidebarListComponent { }
