import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(event) {
    console.log(event);
  }
  firstNameChange(input) {
    console.log(input);
  }
}
