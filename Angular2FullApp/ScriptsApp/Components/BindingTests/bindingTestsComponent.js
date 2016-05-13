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
var favoriteComponent_1 = require('./../Favorite/favoriteComponent');
var likeButtonComponent_1 = require('./../LikeButton/likeButtonComponent');
var accordionComponent_1 = require('./../Accordion/accordionComponent');
var truncatePipe_1 = require('./truncatePipe');
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
        this.elvisOperatorTest = { name: "Test" };
        this.loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
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
        console.log("FavoriteComponent Changed value:");
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
            directives: [favoriteComponent_1.FavoriteComponent, likeButtonComponent_1.LikeButtonComponent, accordionComponent_1.AccordionComponent],
            pipes: [truncatePipe_1.TruncatePipe],
        }), 
        __metadata('design:paramtypes', [])
    ], BindingTests);
    return BindingTests;
}());
exports.BindingTests = BindingTests;
//# sourceMappingURL=bindingTestsComponent.js.map