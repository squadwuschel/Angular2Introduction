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
var router_1 = require('angular2/router');
var common_1 = require('angular2/common');
var emailValidatorDirective_1 = require('./emailValidatorDirective');
var personService_1 = require('./../../Services/personService');
var JsonPlaceHolderClasses_1 = require('./../../TsClasses/JsonPlaceHolderClasses');
var AddUserComponent = (function () {
    //Gute Quelle für Forms in NG2
    //http://blog.ng-book.com/the-ultimate-guide-to-forms-in-angular-2/
    //Quelle für Template driven forms
    //http://blog.thoughtram.io/angular/2016/03/21/template-driven-forms-in-angular-2.html
    //Custom Validation:
    //http://blog.thoughtram.io/angular/2016/03/14/custom-validators-in-angular-2.html
    function AddUserComponent(router, routeParams, personSrv) {
        this.router = router;
        this.routeParams = routeParams;
        this.personSrv = personSrv;
        //public myform: ControlGroup = new ControlGroup({});
        this.user = new JsonPlaceHolderClasses_1.User();
        this.isEditMode = false;
    }
    AddUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userId = this.routeParams.get('id');
        if (userId && parseInt(userId) > 0) {
            this.isEditMode = true;
            this.personSrv.getUserById(parseInt(userId)).subscribe(function (res) {
                //TODO noch prüfen ob der User existiert, wenn nicht auf Not Found Seite umleiten
                _this.user = res;
            }, function (err) {
                if (err.status === 404) {
                    _this.router.navigate(['NotFound']);
                }
            });
        }
    };
    AddUserComponent.prototype.save = function () {
        //TODO wie setzt man das Form wieder zurück, das es nicht mehr dirty ist.
        //this.userFrm.setErrors(null);
        var _this = this;
        if (this.isEditMode) {
            //User aktualisieren
            this.personSrv.updateUser(this.user)
                .subscribe(function (x) {
                //am besten das Form MarkAsPristine setzen, geht aber aktuell noch nicht!
                _this.router.navigate(['Users']);
            });
        }
        else {
            //ist nur Fake Service Call, der user wird dort nicht hinzugefügt!
            this.personSrv.addUser(this.user)
                .subscribe(function (res) {
                _this.router.navigate(['Users']);
            });
        }
    };
    AddUserComponent.prototype.isFormValide = function () {
        if (this.userFrm) {
            return !this.userFrm.valid;
        }
        return false;
    };
    //Dirty Tracking Form and Prevent to leave the current form
    AddUserComponent.prototype.routerCanDeactivate = function (nextInstruction, prevInstruction) {
        if (this.userFrm.dirty) {
            return confirm("Wollen sie wirklich wechseln?");
        }
        return true;
    };
    __decorate([
        core_1.ViewChild('frm'), 
        __metadata('design:type', common_1.NgForm)
    ], AddUserComponent.prototype, "userFrm", void 0);
    AddUserComponent = __decorate([
        core_1.Component({
            selector: 'addUser',
            templateUrl: "Templates/AddUser",
            providers: [personService_1.PersonService],
            directives: [emailValidatorDirective_1.EmailValidatorDirective],
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, personService_1.PersonService])
    ], AddUserComponent);
    return AddUserComponent;
}());
exports.AddUserComponent = AddUserComponent;
//# sourceMappingURL=addUserComponent.js.map