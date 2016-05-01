import {Component} from 'angular2/core';
import {ControlGroup, FormBuilder} from 'angular2/common';


@Component({
    selector: 'obervable',
    template: `<form [ngFormModel]="form"> 	
                  <input type="text" ngControl="search">
               </form>`,
    providers: [], //Dipendency Injection
    directives: [], //die verwendeten Direktiven
})
export class ObservableComponent {

    constructor() {
        //Im Konstruktor einfach per DI einen Service injecten, dieser muss auch in Providers bekannt gemacht werden
    }
}