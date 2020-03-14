import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  // @ViewChild('newtopic', { static: false }) newTopic: ElementRef;

  topicField = new FormControl('');
  topicList = new FormArray([]);

  constructor() { }

  ngOnInit() {
  }
  // addTopic(inputElement: HTMLInputElement) {
  //   console.log(inputElement.value);
  //   // console.log((this.newTopic.nativeElement as HTMLInputElement).value);
  //   inputElement.value = '';
  // }
  addTopic() {
    console.log(this.topicField.value);
    this.topicList.controls.push(this.topicField.value);
    // console.log((this.newTopic.nativeElement as HTMLInputElement).value);
    this.topicField.setValue('');
    console.log(this.topicList);
  }

  get topicLists() {
    return this.topicList.controls;
  }
  removeTopic(item) {
    // console.log('remove topic function called');
    const indexVal = this.topicLists.indexOf(item);
    this.topicLists.splice(indexVal, 1);
    console.log(this.topicList);
  }
}
