import {Component} from 'angular2/core';

// mit "./" sucht er im aktuellen Verzeichnis nach der Komponente
import {CoursesComponent} from './courses.component';

@Component({
    selector: 'my-app',
    template: 'My First Angular 2 App <courses></courses>',
    directives : [CoursesComponent],
})
export class AppComponent { } 