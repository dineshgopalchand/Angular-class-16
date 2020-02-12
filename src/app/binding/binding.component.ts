import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {

  inputValue = '';
  constructor() { }

  ngOnInit() {
  }
  getTitleValue(element: HTMLInputElement) {
    this.inputValue = element.value;
  }

}
