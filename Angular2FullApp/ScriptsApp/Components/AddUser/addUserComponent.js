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
    function AddUserComponent(formBuilder, router, personSrv) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.personSrv = personSrv;
        this.user = new JsonPlaceHolderClasses_1.User();
        this.user.address.street = "Vellerner Str.";
        //this.myform = formBuilder.group({
        //    //Mehrere Validatoren mit Compose zusammenfassen
        //    name: new Control('', Validators.required),
        //    email: new Control('', Validators.compose([Validators.required])),
        //    phone: new Control(''),
        //    address: formBuilder.group({
        //        street: new Control(''),
        //        suite: new Control(''),
        //        city: new Control(''),
        //        zipCode: new Control('')
        //    })
        //});
    }
    AddUserComponent.prototype.showFrm = function (frm) {
        console.log("Local userFrm");
        console.log(this.userFrm);
        console.log("Passed frm");
        console.log(frm);
    };
    AddUserComponent.prototype.save = function (frm) {
        //this.myform.setErrors(null);
        var _this = this;
        //Der myForm.value entspricht genau dem JSON Objekt welches vom Servicer erwartet wird!
        console.log(frm.value);
        //ist nur Fake Service Call, der user wird dort nicht hinzugefügt!
        this.personSrv.addUser(this.user)
            .subscribe(function (res) {
            _this.router.navigate(['Users']);
        });
    };
    AddUserComponent.prototype.isFormValide = function (frm) {
        return !frm.valid;
    };
    //Dirty Tracking Form and Prevent to leave the current form
    AddUserComponent.prototype.routerCanDeactivate = function (nextInstruction, prevInstruction) {
        //TODO access myForm!
        //if (this.myform.dirty) {
        //    return confirm("Wollen sie wirklich wechseln?");
        //}
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
        __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router, personService_1.PersonService])
    ], AddUserComponent);
    return AddUserComponent;
}());
exports.AddUserComponent = AddUserComponent;
//# sourceMappingURL=addUserComponent.js.map