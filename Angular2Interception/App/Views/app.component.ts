import { Component } from '@angular/core';
import { HttpSubjectService } from "../HttpInterception/httpSubject.service";

/**
 * Beschreibung
 *
 */
@Component({
    selector: 'app',
    templateUrl: './app.component.html',
})
export class AppComponent {
    private locals: AppLocalsModel = new AppLocalsModel();

    constructor(private httpSubjectService : HttpSubjectService) {}

    ngOnInit(): void {
        this.notifications();
        this.httpRedirects();
        this.spinner();
        this.overlay();
    }

    /**
     *  Wenn die Funktion für das Overlay angezeigt wird, dann soll dieses ausgeblendet werden
     *  da es z.B. zu einem Fehler gekommen ist im Request.
     */
    private overlay(): void {
        this.httpSubjectService.overlaySubject.subscribe({
            next: () => {
              console.log("Call Overlay Service");
            }
        });
    }

    /**
     * Wir prüfen ob es noch offene Requests gibt und zeigen dies dann im Ui an.
     */
    private spinner(): void {
        this.httpSubjectService.spinnerSubject.subscribe({
            next: (value: number) => {
              console.log("Call Spinner Service");
            }
        });
    }

    /**
     * Abfangen von Meldungen im aktuellen Response. Hier gibt es ein Property Message in dem
     * Meldungen enthalten sind die dann im UI angezeigt werden können.
     */
    private notifications(): void {
        this.httpSubjectService.notificationSubject.subscribe({
            next: (json: any) => {
                console.log("Call Notification Service");
            }
        });
    }

    /**
     * Wenn es beim Request zu einem Fehler kommt oder der User nicht Autorisiert ist,
     * dann muss auf einen alternativen View verwiesen werden.
     */
    private httpRedirects(): void {
        //Bei einem ServerFehler hier entsprechend den passendne View laden
        this.httpSubjectService.http500Subject.subscribe({
            next: (error: any) => {
                console.log("Navigate to Error Page");
            }
        });

        //Wenn der User nicht autorisiert ist, hier auf den passenden View verweisen.
        this.httpSubjectService.http403Subject.subscribe({
            next: (error: any) => {
                console.log("Navigate to Not Authorized Page");
            }
        });
    }
}


class AppLocalsModel {

}