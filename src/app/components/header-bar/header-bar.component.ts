import { Component, Input } from '@angular/core';

@Component({
  selector: 'header-bar',
  template: `
    <header>
      <h1>{{ title }}</h1>
    </header>
  `,
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent {
  @Input()
  title: string;
}
