import { Component } from '@angular/core';

@Component({
  selector: 'mf-main-view',
  template: `
    <header-bar></header-bar>

    <sidebar-list></sidebar-list>
    
    <mf-items-search></mf-items-search>
  `,
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent { }
