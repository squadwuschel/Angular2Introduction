import {Component} from 'angular2/core';


@Component({
    selector: 'addUser',
    templateUrl: `Templates/AddUser`,
    providers: [], //Dipendency Injection (z.B. Services)
    directives: [], //die verwendeten Direktiven
})
export class AddUserComponent {

    constructor() {
        //Im Konstruktor einfach per DI einen Service injecten, dieser muss auch in Providers bekannt gemacht werden
    }
}