import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {

  courseList: any[] = [];
  constructor(private courseService: CoursesService) { }

  ngOnInit() {
    // this.courseList = this.courseService.courseList;
  }

}
