import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()
export class Homeservice {

    constructor(private http: Http) { }

    public getCurrentUsername(): Observable<string> {
        return this.http.get('Home/GetCurrentUsername').map((response: Response) => <string>response.json() as string);
    }
}

