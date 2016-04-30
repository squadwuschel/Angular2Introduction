import {Component} from 'angular2/core';


@Component({
    selector: 'formular-tests',
    templateUrl: `Templates/FormularTests`,
    providers: [], //Dipendency Injection
    directives: [], //die verwendeten Direktiven
})
export class FormularTests {

    constructor() {
        //Im Konstruktor einfach per DI einen Service injecten, dieser muss auch in Providers bekannt gemacht werden
    }
}