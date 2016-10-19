import {Component} from '@angular/core';
import {CourseService} from './../services/course.service';

//@Injectable()
@Component({
    selector: 'person-list',
    templateUrl: `Home/PersonList`,
    providers: [CourseService], //Dipendency Injection
})
export class PersonList {
    public persons: App.Test.IPerson[];

    constructor(private courseService: CourseService) { }

    public getPersons() {
        //Unseren Service aufrufen und die Daten abrufen
        this.courseService.getPersons("test").subscribe( data => this.persons = data );
    }
}