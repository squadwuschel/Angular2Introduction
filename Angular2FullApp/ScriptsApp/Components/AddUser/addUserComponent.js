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
var addUserValidators_1 = require('./addUserValidators');
var personService_1 = require('./../../Services/personService');
var JsonPlaceHolderClasses_1 = require('./../../TsClasses/JsonPlaceHolderClasses');
var AddUserComponent = (function () {
    function AddUserComponent(formBuilder, router, personSrv) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.personSrv = personSrv;
        this.user = new JsonPlaceHolderClasses_1.User();
        this.user.address.street = "Vellerner Str.";
        this.myform = formBuilder.group({
            user: formBuilder.group({
                //Mehrere Validatoren mit Compose zusammenfassen
                name: new common_1.Control(this.user.name, common_1.Validators.required),
                email: new common_1.Control(this.user.email, common_1.Validators.compose([common_1.Validators.required, addUserValidators_1.AddUserValidators.valideEmail])),
                phone: new common_1.Control(this.user.email),
            }),
            address: formBuilder.group({
                street: new common_1.Control(this.user.address.street),
                suite: new common_1.Control(this.user.address.suite),
                city: new common_1.Control(this.user.address.city),
                zipCode: new common_1.Control(this.user.address.zipcode)
            })
        });
    }
    AddUserComponent.prototype.save = function () {
        var _this = this;
        this.myform.setErrors(null);
        console.log(this.user);
        //ist nur Fake Service Call, der user wird dort nicht hinzugefügt!
        this.personSrv.addUser(this.user)
            .subscribe(function (res) {
            _this.router.navigate(['Users']);
        });
    };
    AddUserComponent.prototype.isFormValide = function () {
        return !this.myform.valid;
    };
    //Dirty Tracking Form and Prevent to leave the current form
    AddUserComponent.prototype.routerCanDeactivate = function (nextInstruction, prevInstruction) {
        if (this.myform.dirty) {
            return confirm("Wollen sie wirklich wechseln?");
        }
        return true;
    };
    AddUserComponent = __decorate([
        core_1.Component({
            selector: 'addUser',
            templateUrl: "Templates/AddUser",
            providers: [personService_1.PersonService],
            directives: [],
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router, personService_1.PersonService])
    ], AddUserComponent);
    return AddUserComponent;
}());
exports.AddUserComponent = AddUserComponent;
//# sourceMappingURL=addUserComponent.js.map