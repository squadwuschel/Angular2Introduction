//import {Injectable} from 'angular2/core';
//import {Http, Headers, RequestOptions, RequestOptionsArgs, Response, RequestMethod, Request, Connection, ConnectionBackend} from 'angular2/http';
//import {Subject, Observable} from 'rxjs/Rx';
//export enum Action { QueryStart, QueryStop };
//@Injectable()
//export class ExtHttp extends Http {
//    process: Subject<any> = new Subject<any>();
//    error: Subject<any> = new Subject<any>();
//    constructor(_backend: ConnectionBackend, _defaultOptions: RequestOptions) {
//        super(_backend, _defaultOptions);
//    }
//    private _createHeaders(): Headers {
//        let authData = { token: `abracadabra` };
//        let headers = new Headers({
//            'Accept': 'application/json',
//            'Content-Type': 'application/json'
//        });
//        return headers;
//    }
//    public get(url: string, options?: RequestOptionsArgs) {
//        return this._request(RequestMethod.Get, url, null, options);
//    }
//    public post(url: string, body: string, options?: RequestOptionsArgs) {
//        return this._request(RequestMethod.Post, url, body, options);
//    }
//    public put(url: string, body: string, options?: RequestOptionsArgs) {
//        return this._request(RequestMethod.Put, url, body, options);
//    }
//    public delete(url: string, options?: RequestOptionsArgs) {
//        return this._request(RequestMethod.Delete, url, null, options);
//    }
//    private _request(method: RequestMethod, url: string, body?: string, options?: RequestOptionsArgs): Observable<any> {
//        let requestOptions = new RequestOptions(Object.assign({
//            method: method,
//            url: url,
//            body: body,
//            headers: this._createHeaders()
//        }, options));
//        return Observable.create((observer) => {
//            this.process.next(Action.QueryStart);
//            super.request(new Request(requestOptions))
//                .map(res => res.json())
//                .finally(() => {
//                    this.process.next(Action.QueryStop);
//                })
//                .subscribe(
//                (res) => {
//                    observer.next(res);
//                    observer.complete();
//                },
//                (err) => {
//                    switch (err.status) {
//                    case 401:
//                        //intercept 401 
//                        this.error.next(err);
//                        observer.error(err);
//                        break;
//                    case 500:
//                        //intercept 500
//                        this.error.next(err);
//                        observer.error(err);
//                        break;
//                    default:
//                        this.error.next(err);
//                        observer.error(err);
//                        break;
//                    }
//                });
//        });
//    }
//    //todo: add caching
//}
//export var EXTHTTPPROVIDERS: Array<any> = [
//    Action, ExtHttp
//]; 
//# sourceMappingURL=extHttp.js.map