import {Component, OnInit} from '@angular/core';
import {PersonService} from './../../Services/personService';
import {User} from './../../TsClasses/JsonPlaceHolderClasses'
import * as _ from "lodash";

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

    deleteUser(user: User, index: number): void {
        if (confirm("Wollen Sie den User wirklich löschen?")) {
            this.personSrv.deleteUser(user.id)
                .subscribe(res => {
                    //lodash verwenden statt des Indexes
                    _.remove(this.users, (val : User) => { return val.id === user.id; });
                    //this.users.splice(index, 1);
                });
        }
    }

}