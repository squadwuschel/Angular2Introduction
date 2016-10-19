import {Component} from '@angular/core';
import {CourseService} from './../services/course.service';
import 'rxjs/add/operator/filter'; //Notwendig damit wird weiter unten auf den map Operator zugreifen können
import 'rxjs/add/operator/delay'; //Notwendig damit wird weiter unten auf den map Operator zugreifen können


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
        this.courseService.getPersons("test").delay(400)
            .subscribe(data => this.persons = data);
    }
}