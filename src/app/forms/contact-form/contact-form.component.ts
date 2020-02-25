import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(form: NgForm) {
    console.log(form.value);
    // call form submit API
  }
  firstNameChange(input: NgModel) {
    console.log(input.control.setValue((input.value as string).toUpperCase()));
    // console.log(input);
  }
}
