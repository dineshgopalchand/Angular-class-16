import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  private title = 'Course Name List';
  courseList = [
    {
      id: 1,
      name: 'HTML'
    }, {
      id: 2,
      name: 'JS'
    }, {
      id: 3,
      name: 'CSS'
    }, {
      id: 4,
      name: 'TypeScript'
    }, {
      id: 5,
      name: 'Angular'
    }, {
      id: 6,
      name: 'Reactjs'
    }
  ];
  constructor() { }
  getTitleVal() {
    return this.title;
  }
  get titleVal() {
    return this.title;
  }

}
