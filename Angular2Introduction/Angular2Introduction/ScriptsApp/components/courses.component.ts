import {Component} from 'angular2/core';
import {CourseService} from './../services/course.service';
import {AutoGrowDirective} from './../directives/autoGrow.directive';

//@Injectable()
@Component({
    selector: 'courses',
    template: `<h2>Courses</h2>
               {{title}}
               <input type="text" autoGrow />
               <ul> <li *ngFor="#course of courses">{{course}}</li></ul>`,
    providers: [CourseService], //Dipendency Injection
    directives: [AutoGrowDirective]
})
export class CoursesComponent {
    public title: string = "Das ist der Title der Courses Page";
    public courses: string[] = [];

    constructor(private courseService: CourseService) {
        this.courses = courseService.getCourses();
    }
}