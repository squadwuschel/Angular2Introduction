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
var bindingTestsComponent_1 = require('./Components/BindingTests/bindingTestsComponent');
var formularTestsComponent_1 = require('./Components/FormularTests/formularTestsComponent');
var formularSignupComponent_1 = require('./Components/FormularSignup/formularSignupComponent');
var observablesComponent_1 = require('./Components/Observables/observablesComponent');
var serviceTestsComponent_1 = require('./Components/ServiceTests/serviceTestsComponent');
var MainApp = (function () {
    function MainApp() {
    }
    MainApp = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'Home/MainApp',
            directives: [bindingTestsComponent_1.BindingTests, formularTestsComponent_1.FormularTestsComponent, formularSignupComponent_1.FormularSignupComponent, observablesComponent_1.ObservableComponent, serviceTestsComponent_1.ServiceTestsComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MainApp);
    return MainApp;
}());
exports.MainApp = MainApp;
//# sourceMappingURL=mainApp.js.map