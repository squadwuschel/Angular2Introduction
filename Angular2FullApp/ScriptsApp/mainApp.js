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
var router_deprecated_1 = require('@angular/router-deprecated');
var navigationComponent_1 = require('./Components/Navigation/navigationComponent');
var bindingTestsComponent_1 = require('./Components/BindingTests/bindingTestsComponent');
var formularTestsComponent_1 = require('./Components/FormularTests/formularTestsComponent');
var formularSignupComponent_1 = require('./Components/FormularSignup/formularSignupComponent');
//import {ObservableComponent} from './Components/Observables/observablesComponent';
var serviceTestsComponent_1 = require('./Components/ServiceTests/serviceTestsComponent');
//import {PostComponent} from './Components/ServiceTests/postComponent';
//import {UsersComponent} from './Components/Users/usersComponent';
//import {AddUserComponent} from './Components/AddUser/addUserComponent';
//import {NotFoundComponent as NotFoundComponent} from './Components/AddUser/notFoundComponent';
//import {PostsComponent} from './Components/Posts/postsComponent';
var MainApp = (function () {
    function MainApp() {
    }
    MainApp = __decorate([
        router_deprecated_1.RouteConfig([
            { path: "/bindingTests", name: "BindingTests", component: bindingTestsComponent_1.BindingTests, useAsDefault: true },
            { path: "/formularSignup", name: "FormularSignup", component: formularSignupComponent_1.FormularSignupComponent },
            { path: "/formularTests", name: "FormularTests", component: formularTestsComponent_1.FormularTestsComponent },
            // { path: "/ObservableTests", name: "ObservableTests", component: ObservableComponent },
            { path: "/ServiceTests", name: "ServiceTests", component: serviceTestsComponent_1.ServiceTestsComponent },
        ]),
        core_1.Component({
            selector: 'my-app',
            template: '<navigation></navigation>',
            directives: [navigationComponent_1.NavigationComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MainApp);
    return MainApp;
}());
exports.MainApp = MainApp;
//# sourceMappingURL=mainApp.js.map