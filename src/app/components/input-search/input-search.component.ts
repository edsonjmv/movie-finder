import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mf-input-search',
  templateUrl: './input-search.component.html',
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
