import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ngClass16';
  switchComponent = true;
  dateVal: Date = new Date();
  // showMessage = false;
  ngOnInit(): void {
    setInterval(() => {
      this.dateVal = new Date();
    }, 3000);
  }
}
