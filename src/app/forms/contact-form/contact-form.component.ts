import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  mailingList: any[] = [];
  selectedValue = ['s', 'e'];
  constructor() { }

  ngOnInit() {
    this.mailingList = [
      {
        id: 1,
        name: 'E-mail',
        value: 'e'
      },
      {
        id: 2,
        name: 'Whatsapp',
        value: 'w'
      },
      {
        id: 3,
        name: 'SMS',
        value: 's'
      },
      {
        id: 4,
        name: 'Postal',
        value: 'p'
      },
      {
        id: 5,
        name: 'Phone',
        value: 'c'
      },
      {
        id: 6,
        name: 'Fax',
        value: 'f'
      }
    ];
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
