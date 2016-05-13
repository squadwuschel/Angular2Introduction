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
var common_1 = require('@angular/common');
//Wie erstellt man Validatoren auch als Direktive!
//http://blog.thoughtram.io/angular/2016/03/14/custom-validators-in-angular-2.html
var EmailValidatorDirective = (function () {
    function EmailValidatorDirective() {
    }
    EmailValidatorDirective.prototype.validate = function (control) {
        var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (control.value && !control.value.match(pattern)) {
            //Object zurückgeben, wenn die Validierung fehlgeschlagen ist, mit Infos warum die Validierung fehlgeschlagen ist.
            return { valideEmail: true };
        }
        //Bei alles OK, wird null zurückgegeben.
        return null;
    };
    EmailValidatorDirective = __decorate([
        core_1.Directive({
            selector: '[validateEmail][ngControl],[validateEmail][ngModel],[validateEmail][ngFormControl]',
            providers: [
                core_1.provide(common_1.NG_VALIDATORS, {
                    useExisting: core_1.forwardRef(function () { return EmailValidatorDirective; }),
                    multi: true
                })
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], EmailValidatorDirective);
    return EmailValidatorDirective;
}());
exports.EmailValidatorDirective = EmailValidatorDirective;
//Implementierung für FormBuilder
//export class AddUserValidators {
//    public static valideEmail(control: Control) {
//        var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
//        if (control.value && !control.value.match(pattern)) {
//            //Object zurückgeben, wenn die Validierung fehlgeschlagen ist, mit Infos warum die Validierung fehlgeschlagen ist.
//            return { valideEmail: true };
//        }
//        //Bei alles OK, wird null zurückgegeben.
//        return null;
//    }
//} 
//# sourceMappingURL=emailValidatorDirective.js.map