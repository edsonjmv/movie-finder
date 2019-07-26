import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-search',
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
export class InputSearchComponent {
  @Input()
  placeholderText: string;

  @Input()
  buttonText: string;

  inputText: string = '';

  submit() {
    if (!this.inputText) return;
    console.log(this.inputText);
  }

}
