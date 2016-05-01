import {Component} from 'angular2/core';

import {BindingTests} from './Components/BindingTests/bindingTestsComponent';
import {FormularTestsComponent} from './Components/FormularTests/formularTestsComponent';
import {FormularSignupComponent} from './Components/FormularSignup/formularSignupComponent';


@Component({
    selector: 'my-app',
    templateUrl: 'Home/MainApp',
    directives: [BindingTests, FormularTestsComponent, FormularSignupComponent]
})
export class MainApp {


}