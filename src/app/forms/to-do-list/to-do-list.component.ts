import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  // @ViewChild('newtopic', { static: false }) newTopic: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  addTopic(inputElement: HTMLInputElement) {
    console.log(inputElement.value);
    // console.log((this.newTopic.nativeElement as HTMLInputElement).value);
    inputElement.value = '';
  }
}
