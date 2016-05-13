"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
/* Verwendung
*  <like-button [likes]="anzahlLikes"></like-button>
*/
var LikeButtonComponent = (function () {
    function LikeButtonComponent() {
        this.likes = 0;
        this.wasLiked = false;
        //Im Konstruktor einfach per DI einen Service injecten, dieser muss auch in Providers bekannt gemacht werden
    }
    LikeButtonComponent.prototype.toggleLike = function () {
        if (this.wasLiked) {
            if (this.likes > 0) {
                this.likes--;
            }
        }
        else {
            this.likes++;
        }
        this.wasLiked = !this.wasLiked;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], LikeButtonComponent.prototype, "likes", void 0);
    LikeButtonComponent = __decorate([
        core_1.Component({
            selector: 'like-button',
            template: "<i class=\"fa fa-heart\" [ngClass]=\"{'pink' : wasLiked, 'gray' : !wasLiked }\" (click)=\"toggleLike()\"></i> <span>{{likes}}</span>",
            //Die Styles werden nur dem Template zugeordnet und beeinflussen nicht die Styles außerhalt des Templates.
            styles: ["\n         i { cursor: pointer; }\n         .fa-heart.pink { color: deeppink; }\n         .fa-heart.gray { color: #ccc }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], LikeButtonComponent);
    return LikeButtonComponent;
}());
exports.LikeButtonComponent = LikeButtonComponent;
//# sourceMappingURL=likeButtonComponent.js.map