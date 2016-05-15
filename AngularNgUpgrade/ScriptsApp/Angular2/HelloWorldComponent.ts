import {Component} from '@angular/core';


@Component({
    selector: 'hello-world',
    template: `<div>Hallo Welt von ANGIULAR 2 mit Name: "{{name}}"</div>`,
    providers: [], //Dipendency Injection (z.B. Services)
    directives: [], //die verwendeten Direktiven
})
export class HelloWorldComponent {
    public name: string = "TEST";

    constructor() {
        //Im Konstruktor einfach per DI einen Service injecten, dieser muss auch in Providers bekannt gemacht werden
    }
}