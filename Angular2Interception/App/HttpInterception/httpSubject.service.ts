import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class HttpSubjectService {
    //Wir registrieren ein Subject welches wir an anderer Stelle per Subscribe abfragen können
    //Subscribe wird aufgerufen, wenn die Next Funktion ausgelöst wurde. Die Next Funktion wird im
    //CustomHttp an der passenden Stelle aufgerufen für das jeweilige Subject.
    //https://github.com/ReactiveX/rxjs/blob/master/doc/subject.md
    public notificationSubject = new Subject();
    public http403Subject = new Subject();
    public http500Subject = new Subject();
    public overlaySubject = new Subject();
    public spinnerSubject = new Subject();

    constructor() { }

    /**
     * Das aktuelle HTTP Result als JSON Daten nehmen und unserem Subject hinzufügen
     * Hier kann später geprüft werden ob eine Notification Message enthalten ist.
     */
    public addNotification(resultJson: any): void {
        this.notificationSubject.next(resultJson);
    }

    public addHttp403(result: any): void {
        this.http403Subject.next(result);
    }

    public addHttp500(result: any): void {
        this.http500Subject.next(result);
    }

    public removeOverlay(): void {
        this.overlaySubject.next(0);
    }

    public addSpinner(): void {
        this.spinnerSubject.next(1);
    }

    public removeSpinner(): void {
        this.spinnerSubject.next(-1);
    }
}