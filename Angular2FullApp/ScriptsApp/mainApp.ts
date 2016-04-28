import {Component} from 'angular2/core';

import {BindingTests} from './Components/BindingTests/bindingTests.component';


@Component({
    selector: 'my-app',
    templateUrl: 'Home/MainApp',
    directives: [BindingTests]
})
export class MainApp {


}