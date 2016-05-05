import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
    selector: 'navigation',
    templateUrl: `Templates/Navigation`,
    directives: []
    })
export class NavigationComponent {
    
    constructor(public router : Router) {
        //Im Konstruktor einfach per DI einen Service injecten, dieser muss auch in Providers bekannt gemacht werden
    }

    public isRouteActive(routename: string): boolean {
        return this.router.isRouteActive(this.router.generate([routename]));
    }
}