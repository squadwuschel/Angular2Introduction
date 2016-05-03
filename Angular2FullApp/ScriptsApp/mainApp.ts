import {Component} from 'angular2/core';

import {BindingTests} from './Components/BindingTests/bindingTestsComponent';
import {FormularTestsComponent} from './Components/FormularTests/formularTestsComponent';
import {FormularSignupComponent} from './Components/FormularSignup/formularSignupComponent';
import {ObservableComponent} from './Components/Observables/observablesComponent';
import {ServiceTestsComponent} from './Components/ServiceTests/serviceTestsComponent';


@Component({
    selector: 'my-app',
    templateUrl: 'Home/MainApp',
    directives: [BindingTests, FormularTestsComponent, FormularSignupComponent, ObservableComponent, ServiceTestsComponent]
})
export class MainApp {


}