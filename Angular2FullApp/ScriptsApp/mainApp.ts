import {Component} from 'angular2/core';

import {BindingTests} from './Components/BindingTests/bindingTestsComponent';
import {FormularTests} from './Components/FormularTests/formularTestsComponent';



@Component({
    selector: 'my-app',
    templateUrl: 'Home/MainApp',
    directives: [BindingTests, FormularTests]
})
export class MainApp {


}