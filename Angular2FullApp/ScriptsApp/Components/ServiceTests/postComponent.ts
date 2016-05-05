import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
    selector: 'post',
    templateUrl: `Templates/Post`,
    providers: [], //Dipendency Injection
    directives: [], //die verwendeten Direktiven
})
export class PostComponent {
    public postId: number  = 0;

    constructor(private routeParams: RouteParams) {
        this.postId = parseInt(this.routeParams.get('id'));
    }
}