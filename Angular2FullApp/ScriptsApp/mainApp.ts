import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {BindingTests} from './Components/BindingTests/bindingTestsComponent';
import {FormularTestsComponent} from './Components/FormularTests/formularTestsComponent';
import {FormularSignupComponent} from './Components/FormularSignup/formularSignupComponent';
import {ObservableComponent} from './Components/Observables/observablesComponent';
import {ServiceTestsComponent} from './Components/ServiceTests/serviceTestsComponent';
import {PostComponent} from './Components/ServiceTests/postComponent';


@RouteConfig([
    { path: "/bindingTests", name: "BindingTests", component: BindingTests, useAsDefault : true },
    { path: "/formularSignup", name: "FormularSignup", component: FormularSignupComponent },
    { path: "/formularTests", name: "FormularTests", component: FormularTestsComponent },
    { path: "/ObservableTests", name: "ObservableTests", component: ObservableComponent },
    { path: "/ServiceTests", name: "ServiceTests", component: ServiceTestsComponent },
    { path: "/Post/:id", name: "Post", component: PostComponent },
    { path: "/*other", name: "Other", redirectTo: ["BindingTests"] }
])
@Component({
    selector: 'my-app',
    templateUrl: 'Home/MainApp',
    directives: [BindingTests, FormularTestsComponent, FormularSignupComponent, ObservableComponent, ServiceTestsComponent, ROUTER_DIRECTIVES]
})
export class MainApp {


}