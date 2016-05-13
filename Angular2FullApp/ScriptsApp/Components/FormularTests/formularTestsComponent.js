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
var FormularTestsComponent = (function () {
    function FormularTestsComponent() {
        //Im Konstruktor einfach per DI einen Service injecten, dieser muss auch in Providers bekannt gemacht werden
    }
    FormularTestsComponent.prototype.onSubmit = function (form) {
        console.log("Form Submitted");
        console.log(form);
    };
    FormularTestsComponent = __decorate([
        core_1.Component({
            selector: 'formular-tests',
            templateUrl: "Templates/FormularTests",
            providers: [],
            directives: [],
        }), 
        __metadata('design:paramtypes', [])
    ], FormularTestsComponent);
    return FormularTestsComponent;
}());
exports.FormularTestsComponent = FormularTestsComponent;
//# sourceMappingURL=formularTestsComponent.js.map