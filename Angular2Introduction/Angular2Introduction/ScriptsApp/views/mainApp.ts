import {Component} from 'angular2/core';
// mit "./" sucht er im aktuellen Verzeichnis nach der Komponente
import {CoursesComponent} from './courses.component';
import {CourseService} from './course.service';

@Component({
    selector: 'my-app',
    template: 'My First Angular 2 App <courses></courses>',
    providers: [CourseService], //Dipendency Injection
    directives: [CoursesComponent]
})
export class AppComponent {

    constructor(courseService: CourseService) {

    }
} 
