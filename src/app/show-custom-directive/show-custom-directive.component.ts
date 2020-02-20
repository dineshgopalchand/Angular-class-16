import { Component, OnInit } from '@angular/core';
import { InputSubmitField } from '../common/directive/name-validation.directive';

@Component({
  selector: 'app-show-custom-directive',
  templateUrl: './show-custom-directive.component.html',
  styleUrls: ['./show-custom-directive.component.scss']
})
export class ShowCustomDirectiveComponent implements OnInit {
  nameList: InputSubmitField[] = [];
  constructor() { }

  ngOnInit() {
  }

  submitValue(value: InputSubmitField) {
    this.nameList.push(value);
  }

}
