import {Component} from '@angular/core';
import {FavoriteComponent} from './../Favorite/favoriteComponent';
import {LikeButtonComponent} from './../LikeButton/likeButtonComponent';
import {AccordionComponent} from './../Accordion/accordionComponent';
import {TruncatePipe} from './truncatePipe';

@Component({
    selector: 'binding-tests',
    templateUrl: `Templates/BindingTests`,
    providers: [], //Dipendency Injection
    directives: [FavoriteComponent, LikeButtonComponent, AccordionComponent], //die verwendeten Direktiven
    pipes: [TruncatePipe],  //Pipes (Angular 1.x Filter)
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
    public elvisOperatorTest  = { name : "Test" };

    public loremText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

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
        console.log("FavoriteComponent Changed value:");
        console.log($event);
    }

    public toggleWithNgIf() {
        this.isNgIf = !this.isNgIf;
    }

    public toggleWithHidden() {
        this.isHidden = !this.isHidden;
    }

}