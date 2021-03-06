﻿import {Component, OnInit, OnDestroy} from '@angular/core';
import {PersonService} from './../../Services/personService';
import {Post} from './../../TsClasses/JsonPlaceHolderClasses'

@Component({
    selector: 'service-tests',
    templateUrl: `Templates/ServiceTests`,
    providers: [PersonService], //Dipendency Injection
    directives: [], //die verwendeten Direktiven
})
    //Lifecycle Hooks für AngularJs --> Hier gibt es einige Interfaces die jeweils eine Funktion erfordern
    //die dann entsprechend aufgerufen wird.
export class ServiceTestsComponent implements OnInit, OnDestroy {
    public posts : Post[] = [];

    constructor(private  personSrv: PersonService) {
    }

    public ngOnInit() {
        //Observable 
        this.personSrv.getPosts().subscribe(result => {
            console.log(result);
            this.posts = result;
        });

        //TODO GEHT NICHT Promise
        //this.personSrv.createPost(new Post()).then(result => { console.log(result); });
    }

    public ngOnDestroy() {
        
    }
}