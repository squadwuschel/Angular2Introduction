import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Person} from './../customDataClasses/Person'
import 'rxjs/add/operator/map'; //Notwendig damit wird weiter unten auf den map Operator zugreifen können

@Injectable()
export class CourseService {
    constructor(private _http: Http) { }

    public getCourses(): string[] {
        let courses: string[] = ["Course 1", "Course 2", "Course 3"];
        return courses;
    }

    getPersons(name:string)  {
       // return this._http.get(`Home/GetPersons?name=${name}`).subscribe((res: Response) => { return <Person>res.json() });
        return this._http.get(`Home/GetPersons?name=${name}`).map((res : Response) => res.json());
    }
}