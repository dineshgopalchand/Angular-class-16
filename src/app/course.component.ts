import { Component } from '@angular/core';

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
    <div>`,
    styles: ['p{color:red;}']
})
export class CourseComponent {

}
