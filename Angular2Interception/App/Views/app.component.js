"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var httpSubject_service_1 = require("../HttpInterception/httpSubject.service");
/**
 * Beschreibung
 *
 */
var AppComponent = (function () {
    function AppComponent(httpSubjectService) {
        this.httpSubjectService = httpSubjectService;
        this.locals = new AppLocalsModel();
    }
    AppComponent.prototype.ngOnInit = function () {
        this.notifications();
        this.httpRedirects();
        this.spinner();
        this.overlay();
    };
    /**
     *  Wenn die Funktion für das Overlay angezeigt wird, dann soll dieses ausgeblendet werden
     *  da es z.B. zu einem Fehler gekommen ist im Request.
     */
    AppComponent.prototype.overlay = function () {
        this.httpSubjectService.overlaySubject.subscribe({
            next: function () {
                console.log("Call Overlay Service");
            }
        });
    };
    /**
     * Wir prüfen ob es noch offene Requests gibt und zeigen dies dann im Ui an.
     */
    AppComponent.prototype.spinner = function () {
        this.httpSubjectService.spinnerSubject.subscribe({
            next: function (value) {
                console.log("Call Spinner Service");
            }
        });
    };
    /**
     * Abfangen von Meldungen im aktuellen Response. Hier gibt es ein Property Message in dem
     * Meldungen enthalten sind die dann im UI angezeigt werden können.
     */
    AppComponent.prototype.notifications = function () {
        this.httpSubjectService.notificationSubject.subscribe({
            next: function (json) {
                console.log("Call Notification Service");
            }
        });
    };
    /**
     * Wenn es beim Request zu einem Fehler kommt oder der User nicht Autorisiert ist,
     * dann muss auf einen alternativen View verwiesen werden.
     */
    AppComponent.prototype.httpRedirects = function () {
        //Bei einem ServerFehler hier entsprechend den passendne View laden
        this.httpSubjectService.http500Subject.subscribe({
            next: function (error) {
                console.log("Navigate to Error Page");
            }
        });
        //Wenn der User nicht autorisiert ist, hier auf den passenden View verweisen.
        this.httpSubjectService.http403Subject.subscribe({
            next: function (error) {
                console.log("Navigate to Not Authorized Page");
            }
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: './app.component.html',
        }), 
        __metadata('design:paramtypes', [httpSubject_service_1.HttpSubjectService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var AppLocalsModel = (function () {
    function AppLocalsModel() {
    }
    return AppLocalsModel;
}());
//# sourceMappingURL=app.component.js.map