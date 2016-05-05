import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Post, User} from './../TsClasses/JsonPlaceHolderClasses'

@Injectable()
export class PersonService {

    private url = "http://jsonplaceholder.typicode.com/";

    constructor(private http: Http) {  }

    public getPerson(id : number): Observable<Angular2FullApp.Models.Person> {
        return this.http.get("Person/GetPerson?id=" + id).map((res: Response) => res.json());
    }

    public getPosts() : Observable<Post[]> {
        return this.http.get(this.url + "posts").map((res: Response) => res.json());
    }

    public createPost(post: Post): Promise<boolean> {
        //So einfach kann man aus einem Obserable ein Pormise machen
        return this.http.post(this.url, JSON.stringify(post)).map((res: Response) => res.json()).toPromise();
    }

    public getUser(): Observable<User[]> {
        return this.http.get(this.url + "users").map((res: Response) => res.json());
    }
}