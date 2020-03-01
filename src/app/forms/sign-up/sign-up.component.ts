import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { PasswordValidator } from 'src/app/common/validators/password.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUp: FormGroup;
  passwordVal = '';

  constructor() { }

  ngOnInit() {
    this.signUp = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.pattern(/^[0-9a-zA-Z]+$/)
      ]),
      password: new FormControl('', [
        Validators.required,
        // Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/),
        PasswordValidator.passwordStrength
      ]),
      confirmpassword: new FormControl('', [
        Validators.required
      ])
    }, {
      validators: PasswordValidator.passwordCheck('password', 'confirmpassword')
    });
    console.log(this.signUp);
    this.passWord.valueChanges.subscribe(passwordVal => {
      console.log(passwordVal);
      this.passwordVal = passwordVal;
    });

    // var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    // var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
  }
  signupSubmit() {
    console.log(this.signUp.value);
  }
  get userName() {
    return this.signUp.get('username');
  }
  get passWord() {
    return this.signUp.get('password');
  }
  get confirmPassword() {
    return this.signUp.get('confirmpassword');
  }

}
