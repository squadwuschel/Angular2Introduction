import {Component} from 'angular2/core';


@Component({
    selector: 'binding-tests',
    templateUrl: `Templates/BindingTests`,
    providers: [], //Dipendency Injection
    directives: [], //die verwendeten Direktiven
})
export class BindingTests {
    public isValide: boolean= false;
    public headlineText: string = "Binding Tests";
    public oneWayBinding: string = "One Way";

    constructor() {
        //Im Konstruktor einfach per DI einen Service injecten, dieser muss auch in Providers bekannt gemacht werden
    }

    public toggleSuccess($event : Event) {
        $event.preventDefault();
        console.log($event);
        this.isValide = !this.isValide;
    }
}