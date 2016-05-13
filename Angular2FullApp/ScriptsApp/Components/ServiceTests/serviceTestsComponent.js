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
var router_1 = require('@angular/router');
var personService_1 = require('./../../Services/personService');
var JsonPlaceHolderClasses_1 = require('./../../TsClasses/JsonPlaceHolderClasses');
var ServiceTestsComponent = (function () {
    function ServiceTestsComponent(personSrv) {
        this.personSrv = personSrv;
        this.posts = [];
    }
    ServiceTestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Observable 
        this.personSrv.getPosts().subscribe(function (result) {
            console.log(result);
            _this.posts = result;
        });
        //Promise
        this.personSrv.createPost(new JsonPlaceHolderClasses_1.Post()).then(function (result) { console.log(result); });
    };
    ServiceTestsComponent.prototype.ngOnDestroy = function () {
    };
    ServiceTestsComponent = __decorate([
        core_1.Component({
            selector: 'service-tests',
            templateUrl: "Templates/ServiceTests",
            providers: [personService_1.PersonService],
            directives: [router_1.ROUTER_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [personService_1.PersonService])
    ], ServiceTestsComponent);
    return ServiceTestsComponent;
}());
exports.ServiceTestsComponent = ServiceTestsComponent;
//# sourceMappingURL=serviceTestsComponent.js.map