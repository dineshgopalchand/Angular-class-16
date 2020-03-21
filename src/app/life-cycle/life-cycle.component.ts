import {
  Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input
} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycleComponent
  implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() dateval: Date;
  formattedDate = '';
  someOtherVariable = 1;
  constructor() {
    console.log('constructor get called');
  }

  ngOnChanges() {
    console.log('ngOnChanges get called');
    console.log(this.dateval);
    this.formattedDate = this.dateval.getHours() + ':' + this.dateval.getMinutes() + ':' + this.dateval.getSeconds();

  }
  ngOnInit() {
    console.log('ngOninit get called');
    setInterval(() => {
      this.someOtherVariable++;
    }, 1000);

    // this.someFuntion();
  }
  // ngDoCheck() {
  //   console.log('DoCheck get called');
  // }
  ngAfterContentInit() {
    // console.log('ngAfterContentInit get called');
  }
  ngAfterContentChecked() {
    // console.log('ngAfterContentChecked get called');
  }
  ngAfterViewInit() {
    // console.log('ngAfterViewInit get called');
  }
  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked get called');
  }
  ngOnDestroy() {
    // console.log('ngOnDestroy get called');
    // this.someFuntion();
  }
  someFuntion() {
    console.log('someFunction get called');
  }

}
