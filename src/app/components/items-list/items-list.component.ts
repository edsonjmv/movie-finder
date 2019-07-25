import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mf-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  @Input()
  items;

  constructor() { }

  ngOnInit() {
  }

}
