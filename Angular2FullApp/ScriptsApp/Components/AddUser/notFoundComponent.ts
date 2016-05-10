import {Component} from 'angular2/core';


@Component({
    selector: 'not-found',
    template: `<h1>User wurde nicht gefunden</h1>`,
})
export class NotFoundComponent {

    constructor() {
        //Im Konstruktor einfach per DI einen Service injecten, dieser muss auch in Providers bekannt gemacht werden
    }
}