import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';

import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import {Post} from './../TsClasses/JsonPlaceHolderClasses'


@Injectable()
export class PostsService {
    constructor(private http: Http) {}

    private url = "http://jsonplaceholder.typicode.com/posts";


    public getAllPosts(): Observable<Post[]> {
        return this.http.get(this.url).map((res: Response) => res.json());
    }

    public getPostsByUserId(id : number): Observable<Post[]> {
        return this.http.get(this.url + "?userId=" + id).map((res: Response) => res.json());
    }
}