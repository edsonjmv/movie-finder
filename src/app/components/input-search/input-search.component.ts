import { Component, Input, Output, EventEmitter } from '@angular/core';

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
      [disabled]="!inputText.trim()"
      (click)="submit()">
      {{ buttonText }}
    </button>
  `,
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent {
  inputText: string = '';

  @Input()
  placeholderText: string;

  @Input()
  buttonText: string;

  @Output()
  submitSearch: EventEmitter<string> = new EventEmitter();

  submit() {
    if (!this.inputText.trim()) return;
    this.submitSearch.emit(this.inputText);
    this.inputText = '';
  }

}
