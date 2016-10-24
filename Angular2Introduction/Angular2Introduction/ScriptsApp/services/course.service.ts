import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CourseService {
    constructor(private _http: Http) { }

    public getCourses(): string[] {
        let courses: string[] = ["Course 1", "Course 2", "Course 3"];
        return courses;
    }

    public getPersons(name: string) : Observable<App.Test.IPerson[]>  {
        return this._http.get(`Home/GetPersons?name=${name}`).map((res : Response) =>  <App.Test.IPerson[]>res.json() as App.Test.IPerson[]);
    }

    getPersons2(name: string): void {
        this._http.get(`Home/GetPersons?name=${name}`);
        window.location.href = "";
    }
}