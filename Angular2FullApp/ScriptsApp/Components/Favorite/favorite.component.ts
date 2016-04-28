import {Component, Input} from 'angular2/core';

/* Usage:
* <favorite [isFavorite]="true"></favorite>
*/
@Component({
    selector: 'favorite',
    templateUrl: `Templates/Favorite`,
    providers: [], //Dipendency Injection
    directives: [], //die verwendeten Direktiven
})
export class Favorite {
    //Mit dem @Input Dekorator gibt man an das es sich um ein Property handelt mit dem 
    //Werte an die Komponente übergeben werden können.
    @Input() public isFavorite : boolean = false;

    constructor() {
        //Im Konstruktor einfach per DI einen Service injecten, dieser muss auch in Providers bekannt gemacht werden
    }

    public toggleFavorite() {
        this.isFavorite = !this.isFavorite;
    }
}