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
var core_1 = require('angular2/core');
/* Usage:
* <favorite [isFavorite]="true" (changed)="onFavoriteChange()"></favorite>
*/
var Favorite = (function () {
    function Favorite() {
        //Mit dem @Input Dekorator gibt man an das es sich um ein Property handelt mit dem 
        //Werte an die Komponente übergeben werden können.
        this.isFavorite = false;
        //nach aussen leiten, das etwas passiert ist.
        this.changed = new core_1.EventEmitter();
        //Im Konstruktor einfach per DI einen Service injecten, dieser muss auch in Providers bekannt gemacht werden
    }
    Favorite.prototype.toggleFavorite = function () {
        this.isFavorite = !this.isFavorite;
        //Setzen das etwas passiert ist.
        this.changed.emit({ newValue: this.isFavorite });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Favorite.prototype, "isFavorite", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Favorite.prototype, "changed", void 0);
    Favorite = __decorate([
        core_1.Component({
            selector: 'favorite',
            templateUrl: "Templates/Favorite",
            //Die Styles werden nur dem Template zugeordnet und beeinflussen nicht die Styles außerhalt des Templates.
            styles: ["\n            .fa-star { color: orange; }\n            "],
            providers: [],
            directives: [],
        }), 
        __metadata('design:paramtypes', [])
    ], Favorite);
    return Favorite;
}());
exports.Favorite = Favorite;
//# sourceMappingURL=favorite.component.js.map