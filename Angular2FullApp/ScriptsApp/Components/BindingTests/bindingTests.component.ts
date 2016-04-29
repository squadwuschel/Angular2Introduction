import {Component} from 'angular2/core';
import {Favorite} from './../Favorite/favorite.component';
import {LikeButton} from './../LikeButton/likeButton.component';

@Component({
    selector: 'binding-tests',
    templateUrl: `Templates/BindingTests`,
    providers: [], //Dipendency Injection
    directives: [Favorite, LikeButton], //die verwendeten Direktiven
})
export class BindingTests {
    public isValide: boolean = false;
    public isFavoriteValue : boolean= false;
    public headlineText: string = "Binding Tests";
    public oneWayBinding: string = "One Way";
    public anzahlLikes: number = 10;
    public isNgIf: boolean = true;
    public isHidden : boolean = false;
    public courses : string[] = ["Course 1", "Course 2", "Courde 3"];

    constructor() {
        //Im Konstruktor einfach per DI einen Service injecten, dieser muss auch in Providers bekannt gemacht werden
    }

    public toggleSuccess($event : Event) {
        $event.preventDefault();
        console.log($event);
        this.isValide = !this.isValide;
    }

    public toggleFavorite() {
        this.isFavoriteValue = !this.isFavoriteValue;
    }

    public onFavoriteChange($event) {
        console.log("Favorite Changed value:");
        console.log($event);
    }

    public toggleWithNgIf() {
        this.isNgIf = !this.isNgIf;
    }

    public toggleWithHidden() {
        this.isHidden = !this.isHidden;
    }

}