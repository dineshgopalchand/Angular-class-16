import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-event',
  templateUrl: './data-event.component.html',
  styleUrls: ['./data-event.component.scss']
})
export class DataEventComponent implements OnInit {

  private title = 'Display Data and Event handling';
  // imgSrc = 'assets/images/dinesh.jpg';
  dummyImageSrc = 'https://dummyimage.com/300x200/e640e6/fff';
  tableTitle = 'Attribute binding sample';
  colSpan = 2;
  rowSpan = 2;
  isActive = false;
  titleInputValue = '';
  constructor() { }

  ngOnInit() {
  }
  changeStatus() {
    this.isActive = !this.isActive;
  }
  get titleVal() {
    // return this.title.toUpperCase();
    return this.title.toUpperCase().italics();
  }
  getButtonDetails(event: MouseEvent) {
    console.log('button clicked');
    console.log((event.target as HTMLButtonElement).innerHTML);
  }
  
  titleFieldFunction(event: KeyboardEvent) {
    console.log(event);

    // example of event filtering
    if (event.keyCode === 13) {
      this.titleInputValue = (event.target as HTMLInputElement).value;
    }
  }

}
