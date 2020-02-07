import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {
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
    getCourse() {
        return this.courseList;
    }
}
