import { Injectable } from '@angular/core';
import { Http, ConnectionBackend, Request, RequestOptions, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

//http://restlet.com/blog/2016/04/18/interacting-efficiently-with-a-restful-service-with-angular2-and-rxjs-part-3/

@Injectable()
export class CustomHttp extends Http {
    constructor(backend: ConnectionBackend,
        defaultOptions: RequestOptions) {
        super(backend, defaultOptions);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        //console.log('Before the request...');
        return super.request(url, options).map(res => {
                console.log(res.json());
                return res;
            })
            .catch((err) => {
                console.log('On received an error...');
                return Observable.throw(err);
            })
            .finally(() => {
                console.log('After the request...');
        });
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        //console.log('Before the request...');
        return super.get(url, options).map(res => {
                console.log(res.json());
                return res;
            })
            .catch((err) => {
                console.log('On received an error...');
                return Observable.throw(err);
            })
            .finally(() => {
                console.log('After the request...');
        });
    }

    post(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
        console.log('Before the request...');
        return super.post(url, body, options)
            .catch((err: any): any => {
                if (err.status === 400 || err.status === 422) {
                    return Observable.throw(err);
                } else {
                    //this.errorService.notifyError(err);
                    return Observable.empty();
                }
            })
            .finally(() => {
                console.log('After the request...');
            });
    }

}