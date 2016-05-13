import {Component} from '@angular/core';
import {ControlGroup, FormBuilder} from '@angular/common';
//Kompletten Observables einbinden
//import {Observable} from 'rxjs/Rx';
//angular 2 hat nur ein paar wichtige Obserbables in der Stammdefinition, der Rest muss extra nachgeladen werden siehe map
import {Observable} from 'rxjs';
//import 'rxjs/add/operator/fromArray';
//import 'rxjs/add/operator/map';

@Component({
    selector: 'observable',
    templateUrl: `Templates/Observables`,
    providers: [], //Dipendency Injection
    directives: [], //die verwendeten Direktiven
})
export class ObservableComponent {
    public form: ControlGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group({ search: [] });

        var searchInput = this.form.find('search');
        searchInput.valueChanges
            .debounceTime(400)
            .map(str => (<string>str).replace(' ', '­‐'))
            .subscribe(x => console.log(x));

        //this.observeArray();
        //this.observableTimer();
        //this.observablesParelleMode();
        //this.observableTimeOuts();
    }


    public observeArray(): void {
        var startDates = [];
        var startDate = new Date();

        for (var day = -2; day <= 2; day++) {
            var date = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDay() + day);
            startDates.push(date);
        }

        //Observable.fromArray(startDates)
        //    .map(date => {
        //        console.log("Getting deals for Date " + date);
        //        return [1, 2, 3];
        //    })
        //    .subscribe(x => console.log(x));
    }

    public observableTimer(): void {
        var observable = Observable.interval(1000);
        observable
            .flatMap(x => {
                console.log("Calling the server to get the latest news");
                return Observable.of([1, 2, 3]);
            })
            .subscribe(news => console.log(news));


    }

    public observablesParelleMode(): void {
        var userStram = Observable.of({ userId: 1, username: "squad" }).delay(2000);
        var tweetStream = Observable.of([1, 2, 3]).delay(1000);

        Observable.forkJoin(userStram, tweetStream)
            .map(joined => new Object({ user: joined[0], tweets: joined[1] }))
            .subscribe(result => console.log(result));

    }

    public observableTimeOuts(): void {
        var remoteObservable = Observable.of([1, 2, 3]).delay(5000);
        remoteObservable.timeout(1000)
            .subscribe(x => console.log(x), error => console.log(error));

    }

}