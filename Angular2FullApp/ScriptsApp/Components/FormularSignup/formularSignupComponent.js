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
var common_1 = require('angular2/common');
var usernameValidators_1 = require('./usernameValidators');
var FormularSignupComponent = (function () {
    function FormularSignupComponent() {
        this.myform = new common_1.ControlGroup({
            //Custom Validation:
            //http://blog.thoughtram.io/angular/2016/03/14/custom-validators-in-angular-2.html
            //Mehrere Validatoren mit Compose zusammenfassen
            username: new common_1.Control('', common_1.Validators.compose([common_1.Validators.required, usernameValidators_1.UsernameValidators.cannotContainSpace]), usernameValidators_1.UsernameValidators.shouldBeUnique),
            password: new common_1.Control('', common_1.Validators.required)
        });
        //Im Konstruktor einfach per DI einen Service injecten, dieser muss auch in Providers bekannt gemacht werden
    }
    FormularSignupComponent.prototype.signup = function () {
        //Wenn wir z.B. von einem AuthService false zurückbekommen, das der Login nicht valide war,
        //können wir auch wieder direkt einen Fehler im ValidationModel setzen.
        this.myform.find('username').setErrors({ invalidLogin: true });
        console.log(this.myform.value);
    };
    FormularSignupComponent = __decorate([
        core_1.Component({
            selector: 'form-signup',
            templateUrl: "Templates/FormularSignup",
        }), 
        __metadata('design:paramtypes', [])
    ], FormularSignupComponent);
    return FormularSignupComponent;
}());
exports.FormularSignupComponent = FormularSignupComponent;
//# sourceMappingURL=formularSignupComponent.js.map