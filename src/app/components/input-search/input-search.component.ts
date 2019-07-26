import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mf-input-search',
  template: `
    <input 
      type="text"
      placeholder="{{ placeholderText }}"
      [(ngModel)]="inputText"
      (keyup.enter)="submit()"
      >

    <button
      [disabled]="!inputText"
      (click)="submit()">
      {{ buttonText }}
    </button>
  `,
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit {
  @Input()
  placeholderText: string;

  @Input()
  buttonText: string;

  inputText: string = '';

  constructor() { }

  ngOnInit() {
  }

  submit() {
    if (!this.inputText) return;
    console.log(this.inputText);
  }

}
