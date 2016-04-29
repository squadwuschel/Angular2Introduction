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
var favorite_component_1 = require('./../Favorite/favorite.component');
var likeButton_component_1 = require('./../LikeButton/likeButton.component');
var BindingTests = (function () {
    function BindingTests() {
        this.isValide = false;
        this.isFavoriteValue = false;
        this.headlineText = "Binding Tests";
        this.oneWayBinding = "One Way";
        this.anzahlLikes = 10;
        this.isNgIf = true;
        this.isHidden = false;
        this.courses = ["Course 1", "Course 2", "Courde 3"];
        //Im Konstruktor einfach per DI einen Service injecten, dieser muss auch in Providers bekannt gemacht werden
    }
    BindingTests.prototype.toggleSuccess = function ($event) {
        $event.preventDefault();
        console.log($event);
        this.isValide = !this.isValide;
    };
    BindingTests.prototype.toggleFavorite = function () {
        this.isFavoriteValue = !this.isFavoriteValue;
    };
    BindingTests.prototype.onFavoriteChange = function ($event) {
        console.log("Favorite Changed value:");
        console.log($event);
    };
    BindingTests.prototype.toggleWithNgIf = function () {
        this.isNgIf = !this.isNgIf;
    };
    BindingTests.prototype.toggleWithHidden = function () {
        this.isHidden = !this.isHidden;
    };
    BindingTests = __decorate([
        core_1.Component({
            selector: 'binding-tests',
            templateUrl: "Templates/BindingTests",
            providers: [],
            directives: [favorite_component_1.Favorite, likeButton_component_1.LikeButton],
        }), 
        __metadata('design:paramtypes', [])
    ], BindingTests);
    return BindingTests;
}());
exports.BindingTests = BindingTests;
//# sourceMappingURL=bindingTests.component.js.map