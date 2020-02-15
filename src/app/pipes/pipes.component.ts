import { Component, OnInit } from '@angular/core';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  details = {
    name: 'Dinesh',
    currentDate: new Date(),
    numberOfStudent: 20000,
    amount: 12000,
    rating: 7.674,
    rating1: 7.6,
    rating2: 17.6,
    postTitle: 'Lorem ipsuM Dolor Sit amet.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque obcaecati iusto voluptas atque fugiat neque quibusdam\
     exercitationem vel, ipsam et?'
  };
  colorPattern = ['#333745', '#e63462', '#fe5f55', 'blue', 'green', 'red'];
  currencyCode = 'INR';
  // stringifyObject = '';

  constructor(private keyValuePipe: KeyValuePipe) { }

  ngOnInit() {
    // console.log(this.details);
    // console.table(this.details);
    // this.stringifyObject = JSON.stringify(this.details);
    // for (const key in this.details) {
    //   if (this.details.hasOwnProperty(key)) {
    //     const element = this.details[key];
    //     console.log({ key, value: this.details[key] });
    //   }
    // }

    // steps to use pipe in ts
    // 1. include pipe class as a provided in module
    // 2. use pipe object as service in any component/directive
    // 3. user transform method to apply pipe
    console.log(this.keyValuePipe.transform(this.details));
  }

}
