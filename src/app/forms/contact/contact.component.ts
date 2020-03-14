import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // form = new FormGroup({
  //   name: new FormControl(),
  //   topics: new FormArray([]),
  //   contact: new FormGroup({
  //     email: new FormControl(),
  //     phone: new FormControl()
  //   })
  // });
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      // name: new FormControl(''),
      // name: this.fb.control(''),
      name: ['', Validators.required],
      topics: this.fb.array([]),
      contact: this.fb.group({
        email: [],
        phone: []
      })
    });
    console.log(this.form);
  }

}
