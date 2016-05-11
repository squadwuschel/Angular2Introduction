import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';

import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';

import {Comment} from './../TsClasses/JsonPlaceHolderClasses'

@Injectable()
export class CommentService {
    private url = "http://jsonplaceholder.typicode.com/comments";

    constructor(private http: Http) { }

    public getCommentsForPostId(id: number): Observable<Comment[]> {
        return this.http.get(this.url + "?postId=" + id).map((res: Response) => res.json());
    }
}