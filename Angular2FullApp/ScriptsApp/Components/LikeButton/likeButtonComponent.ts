import {Component, Input} from '@angular/core';

/* Verwendung
*  <like-button [likes]="anzahlLikes"></like-button>
*/
@Component({
    selector: 'like-button',
    template: `<i class="fa fa-heart" [ngClass]="{'pink' : wasLiked, 'gray' : !wasLiked }" (click)="toggleLike()"></i> <span>{{likes}}</span>`,
    //Die Styles werden nur dem Template zugeordnet und beeinflussen nicht die Styles außerhalt des Templates.
    styles: [`
         i { cursor: pointer; }
         .fa-heart.pink { color: deeppink; }
         .fa-heart.gray { color: #ccc }
    `]
})
export class LikeButtonComponent {
    @Input() public likes: number = 0;
    public wasLiked: boolean = false;

    constructor() {
        //Im Konstruktor einfach per DI einen Service injecten, dieser muss auch in Providers bekannt gemacht werden
    }

    public toggleLike() {
        if (this.wasLiked) {
            if (this.likes > 0) {
                this.likes--;
            }
        } else {
            this.likes++;
        }

        this.wasLiked = !this.wasLiked;
    }
}