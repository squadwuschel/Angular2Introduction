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
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
//Kompletten Observables einbinden
var Rx_1 = require('rxjs/Rx');
//angular 2 hat nur ein paar wichtige Obserbables in der Stammdefinition, der Rest muss extra nachgeladen werden siehe map
//import {Observable} from 'rxjs/observable';
//import 'rxjs/add/operator/debounceTime';
//import 'rxjs/add/operator/map';
var ObservableComponent = (function () {
    function ObservableComponent(fb) {
        this.form = fb.group({ search: [] });
        var searchInput = this.form.find('search');
        searchInput.valueChanges
            .debounceTime(400)
            .map(function (str) { return str.replace(' ', '­‐'); })
            .subscribe(function (x) { return console.log(x); });
        //this.observeArray();
        //this.observableTimer();
        //this.observablesParelleMode();
        //this.observableTimeOuts();
    }
    ObservableComponent.prototype.observeArray = function () {
        var startDates = [];
        var startDate = new Date();
        for (var day = -2; day <= 2; day++) {
            var date = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDay() + day);
            startDates.push(date);
        }
        Rx_1.Observable.fromArray(startDates)
            .map(function (date) {
            console.log("Getting deals for Date " + date);
            return [1, 2, 3];
        })
            .subscribe(function (x) { return console.log(x); });
    };
    ObservableComponent.prototype.observableTimer = function () {
        var observable = Rx_1.Observable.interval(1000);
        observable
            .flatMap(function (x) {
            console.log("Calling the server to get the latest news");
            return Rx_1.Observable.of([1, 2, 3]);
        })
            .subscribe(function (news) { return console.log(news); });
    };
    ObservableComponent.prototype.observablesParelleMode = function () {
        var userStram = Rx_1.Observable.of({ userId: 1, username: "squad" }).delay(2000);
        var tweetStream = Rx_1.Observable.of([1, 2, 3]).delay(1000);
        Rx_1.Observable.forkJoin(userStram, tweetStream)
            .map(function (joined) { return new Object({ user: joined[0], tweets: joined[1] }); })
            .subscribe(function (result) { return console.log(result); });
    };
    ObservableComponent.prototype.observableTimeOuts = function () {
        var remoteObservable = Rx_1.Observable.of([1, 2, 3]).delay(5000);
        remoteObservable.timeout(1000)
            .subscribe(function (x) { return console.log(x); }, function (error) { return console.log(error); });
    };
    ObservableComponent = __decorate([
        core_1.Component({
            selector: 'observable',
            templateUrl: "Templates/Observables",
            providers: [],
            directives: [],
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder])
    ], ObservableComponent);
    return ObservableComponent;
}());
exports.ObservableComponent = ObservableComponent;
//# sourceMappingURL=observablesComponent.js.map