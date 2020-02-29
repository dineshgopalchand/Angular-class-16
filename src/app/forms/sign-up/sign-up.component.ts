import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUp: FormGroup;

  constructor() { }

  ngOnInit() {
    this.signUp = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.pattern(/^[0-9a-zA-Z]+$/)
      ]),
      password: new FormControl('')
    });
    console.log(this.signUp);
  }
  signupSubmit() {
    console.log(this.signUp.value);
  }
  get userName() {
    return this.signUp.get('username');
  }

}
