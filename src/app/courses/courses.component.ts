import { Component } from '@angular/core';
import { CourseService } from '../services/course.service';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  private title = 'Course Name List';
  courseList = [];
  // courseService: CourseService;
  constructor(private courseService: CoursesService) {
    // this.courseService = new CourseService();
    // this.courseList=courseService.getCourse();
    this.courseList = this.courseService.courseList;
  }
  getTitleVal() {
    return this.title;
  }
  get titleVal() {
    return this.title;
  }

  addCourse() {
    // console.log('addCourse function triggered');
    // this.courseList.push({
    //   id: 7,
    //   name: 'Python'
    // });
    this.courseService.courseList.push({
      id: 7,
      name: 'Python'
    });
  }

}
