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
var personService_1 = require('./../../Services/personService');
var _ = require("lodash");
var UsersComponent = (function () {
    function UsersComponent(personSrv) {
        this.personSrv = personSrv;
        this.users = [];
        //Im Konstruktor einfach per DI einen Service injecten, dieser muss auch in Providers bekannt gemacht werden
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.personSrv.getUser().subscribe(function (result) { _this.users = result; });
    };
    UsersComponent.prototype.deleteUser = function (user, index) {
        var _this = this;
        if (confirm("Wollen Sie den User wirklich löschen?")) {
            this.personSrv.deleteUser(user.id)
                .subscribe(function (res) {
                //lodash verwenden statt des Indexes
                _.remove(_this.users, function (val) { return val.id === user.id; });
                //this.users.splice(index, 1);
            });
        }
    };
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'users',
            templateUrl: "Templates/Users",
            providers: [personService_1.PersonService],
            directives: [],
        }), 
        __metadata('design:paramtypes', [personService_1.PersonService])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=usersComponent.js.map