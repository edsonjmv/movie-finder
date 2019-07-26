import { Component, Input } from '@angular/core';

@Component({
  selector: 'header-bar',
  template: `
    <header>
      <h3>{{ title }}</h3>
    </header>
  `,
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent {
  @Input()
  title: string;
}
