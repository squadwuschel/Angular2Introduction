import {Component} from '@angular/core';
import {RouteParams} from '@angular/router-deprecated';

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