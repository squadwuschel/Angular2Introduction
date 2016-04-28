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
* <favorite [isFavorite]="true"></favorite>
*/
var Favorite = (function () {
    function Favorite() {
        //Mit dem @Input Dekorator gibt man an das es sich um ein Property handelt mit dem 
        //Werte an die Komponente übergeben werden können.
        this.isFavorite = false;
        //Im Konstruktor einfach per DI einen Service injecten, dieser muss auch in Providers bekannt gemacht werden
    }
    Favorite.prototype.toggleFavorite = function () {
        this.isFavorite = !this.isFavorite;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Favorite.prototype, "isFavorite", void 0);
    Favorite = __decorate([
        core_1.Component({
            selector: 'favorite',
            templateUrl: "Templates/Favorite",
            providers: [],
            directives: [],
        }), 
        __metadata('design:paramtypes', [])
    ], Favorite);
    return Favorite;
}());
exports.Favorite = Favorite;
//# sourceMappingURL=favorite.component.js.map