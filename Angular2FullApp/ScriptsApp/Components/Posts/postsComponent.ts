import {Component} from 'angular2/core';


@Component({
    selector: 'posts',
    templateUrl: `Templates/Posts`,
    providers: [], //Dipendency Injection
    directives: [], //die verwendeten Direktiven
})
export class PostsComponent {

    constructor() {
        //Im Konstruktor einfach per DI einen Service injecten, dieser muss auch in Providers bekannt gemacht werden
    }
}