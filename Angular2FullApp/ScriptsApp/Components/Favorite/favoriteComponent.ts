import {Component, Input, Output, EventEmitter} from 'angular2/core';

/* Usage:
* <favorite [isFavorite]="true" (changed)="onFavoriteChange()"></favorite>
*/
@Component({
    selector: 'favorite',
    templateUrl: `Templates/FavoriteComponent`,
    //Die Styles werden nur dem Template zugeordnet und beeinflussen nicht die Styles außerhalt des Templates.
    styles: [`
            .fa-star { color: orange; }
            `],
    providers: [], //Dipendency Injection
    directives: [], //die verwendeten Direktiven
})
export class FavoriteComponent {
    //Mit dem @Input Dekorator gibt man an das es sich um ein Property handelt mit dem 
    //Werte an die Komponente übergeben werden können.
    @Input() public isFavorite: boolean = false;

    //nach aussen leiten, das etwas passiert ist.
    @Output() changed = new EventEmitter();

    constructor() {
        //Im Konstruktor einfach per DI einen Service injecten, dieser muss auch in Providers bekannt gemacht werden
    }

    public toggleFavorite() {
        this.isFavorite = !this.isFavorite;
        //Setzen das etwas passiert ist.
        this.changed.emit({ newValue: this.isFavorite });
    }
}