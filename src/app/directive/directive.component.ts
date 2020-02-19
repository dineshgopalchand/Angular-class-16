import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss'],
})
export class DirectiveComponent implements OnInit {

  courseList: CourseType[] = [];
  constructor(private courseService: CoursesService) { }

  ngOnInit() {
    this.courseList = this.courseService.courseList;
  }
  switchCourseStatus() {
    this.courseList = this.courseList.length ? [] : this.courseService.courseList;
  }
  addCourse() {
    this.courseList.push({
      id: 34,
      name: 'Ruby'
    });
  }
  removeCourse(course: CourseType) {
    // const index = this.courseList.indexOf(course);
    const index = this.courseList.indexOf(course);
    this.courseList.splice(index, 1);
  }

}

export interface CourseType {
  id: number;
  name: string;
}
