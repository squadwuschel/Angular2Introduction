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
var Subject_1 = require('rxjs/Subject');
var HttpSubjectService = (function () {
    function HttpSubjectService() {
        //Wir registrieren ein Subject welches wir an anderer Stelle per Subscribe abfragen können
        //Subscribe wird aufgerufen, wenn die Next Funktion ausgelöst wurde. Die Next Funktion wird im
        //CustomHttp an der passenden Stelle aufgerufen für das jeweilige Subject.
        //https://github.com/ReactiveX/rxjs/blob/master/doc/subject.md
        this.notificationSubject = new Subject_1.Subject();
        this.http403Subject = new Subject_1.Subject();
        this.http500Subject = new Subject_1.Subject();
        this.overlaySubject = new Subject_1.Subject();
        this.spinnerSubject = new Subject_1.Subject();
    }
    /**
     * Das aktuelle HTTP Result als JSON Daten nehmen und unserem Subject hinzufügen
     * Hier kann später geprüft werden ob eine Notification Message enthalten ist.
     */
    HttpSubjectService.prototype.addNotification = function (resultJson) {
        this.notificationSubject.next(resultJson);
    };
    HttpSubjectService.prototype.addHttp403 = function (result) {
        this.http403Subject.next(result);
    };
    HttpSubjectService.prototype.addHttp500 = function (result) {
        this.http500Subject.next(result);
    };
    HttpSubjectService.prototype.removeOverlay = function () {
        this.overlaySubject.next(0);
    };
    HttpSubjectService.prototype.addSpinner = function () {
        this.spinnerSubject.next(1);
    };
    HttpSubjectService.prototype.removeSpinner = function () {
        this.spinnerSubject.next(-1);
    };
    HttpSubjectService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], HttpSubjectService);
    return HttpSubjectService;
}());
exports.HttpSubjectService = HttpSubjectService;
//# sourceMappingURL=httpSubject.service.js.map