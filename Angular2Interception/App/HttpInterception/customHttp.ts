import { Injectable } from '@angular/core';
import { Http, ConnectionBackend, Request, RequestOptions, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';


import { HttpSubjectService as SxpHttpSubjectService } from './httpSubject.service';

//http://restlet.com/blog/2016/04/18/interacting-efficiently-with-a-restful-service-with-angular2-and-rxjs-part-3/

@Injectable()
export class CustomHttp extends Http {
    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, private httpSubjectService: SxpHttpSubjectService) {
        super(backend, defaultOptions);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        this.httpSubjectService.addSpinner();
        return super.request(url, options).map(res => {
            this.httpSubjectService.addNotification(res.json());
            return res;
        })
            .catch((err) => {
                this.httpSubjectService.removeSpinner();
                this.httpSubjectService.removeOverlay();

                if (err.status === 400 || err.status === 422) {
                    this.httpSubjectService.addHttp403(err);
                    return Observable.throw(err);
                } else if (err.status === 500) {
                    this.httpSubjectService.addHttp500(err);
                    return Observable.throw(err);
                } else {
                    return Observable.empty();
                }
            })
            .finally(() => {
                // console.log('After the request...');
                this.httpSubjectService.removeSpinner();
            });
    }
}