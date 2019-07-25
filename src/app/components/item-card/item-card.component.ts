import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mf-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input()
  imageUrl: string;

  @Input()
  title: string;

  @Input()
  subtitle: string;

  @Input()
  text: string;

  constructor() { }

  ngOnInit() {
  }

}
