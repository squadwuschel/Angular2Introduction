import {Component} from 'angular2/core';
import {CourseService} from './course.service';

//@Injectable()
@Component({
    selector: 'courses',
    template: `<h2>Courses</h2>
               {{title}}
               <ul> <li *ngFor="#course of courses">{{course}}</li></ul>`,
     providers: [CourseService] //Dipendency Injection
})
export class CoursesComponent {
    public title: string = "Das ist der Title der Courses Page";
    public courses: string[] = [];

    //constructor(private courseService: CourseService) {
    //    this.courses = courseService.getCourses();
    //}
}