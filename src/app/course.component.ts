import { Component } from '@angular/core';
import { CourseService } from './services/course.service';
import { CoursesService } from './services/courses.service';

@Component({
    selector: 'app-course',
    // template: '<p>this is from course component</p>',
    // template: '<div>'
    //     + '<p>this is from course component</p>'
    //     + '<div>',
    // template: '<div>\
    // <p>this is from course component</p>\
    // <div>',
    template: `<div>
    <h3>Course title</h3>
    <p>this is from course component</p>
    <div>
    <div>
    <ol>
        <li *ngFor="let course of courseList">
            {{course.name}} (ID: {{course.id}})
        </li>
    </ol>
</div>`,
    styles: ['p{color:red;}']
})
export class CourseComponent {
    courseList = [];
    // courseService: CourseService;
    constructor(private courseService: CoursesService) {
        // this.courseService = new CourseService();
        this.courseList = this.courseService.courseList;
    }
}
