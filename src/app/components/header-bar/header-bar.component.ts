import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mf-header-bar',
  template: `
    <header>
      <h3>Movie finder</h3>
    </header>
  `,
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
