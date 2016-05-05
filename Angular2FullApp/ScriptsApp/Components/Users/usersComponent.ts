import {Component, OnInit} from 'angular2/core';
import {PersonService} from './../../Services/personService';
import {User} from './../../TsClasses/JsonPlaceHolderClasses'

@Component({
    selector: 'users',
    templateUrl: `Templates/Users`,
    providers: [PersonService], //Dipendency Injection
    directives: [], //die verwendeten Direktiven
})
export class UsersComponent implements OnInit {
    public users : User[] = [];

    constructor(private personSrv : PersonService) {
        //Im Konstruktor einfach per DI einen Service injecten, dieser muss auch in Providers bekannt gemacht werden
    }

    ngOnInit() {
        this.personSrv.getUser().subscribe(result => { this.users = result; });
    }
}