import {Component} from '@angular/core';
import {Router} from '@angular/router-deprecated';

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