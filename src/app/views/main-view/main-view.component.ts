import { Component } from '@angular/core';

@Component({
  selector: 'mf-main-view',
  template: `
    <mf-header-bar></mf-header-bar>

    <mf-sidebar-list></mf-sidebar-list>
    
    <mf-items-search></mf-items-search>
  `,
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent { }
