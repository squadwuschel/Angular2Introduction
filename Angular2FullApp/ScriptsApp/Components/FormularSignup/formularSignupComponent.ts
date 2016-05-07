import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators} from 'angular2/common';
import {UsernameValidators} from './usernameValidators';


@Component({
    selector: 'form-signup',
    templateUrl: `Templates/FormularSignup`,
})
export class FormularSignupComponent {
    public myform = new ControlGroup({
        //Custom Validation:
        //http://blog.thoughtram.io/angular/2016/03/14/custom-validators-in-angular-2.html

        //Mehrere Validatoren mit Compose zusammenfassen
        username: new Control('', Validators.compose([Validators.required, UsernameValidators.cannotContainSpace]), UsernameValidators.shouldBeUnique),
        password: new Control('', Validators.required)
    });

    constructor() {
        //Im Konstruktor einfach per DI einen Service injecten, dieser muss auch in Providers bekannt gemacht werden
    }

    public signup(): void {

        //Wenn wir z.B. von einem AuthService false zurückbekommen, das der Login nicht valide war,
        //können wir auch wieder direkt einen Fehler im ValidationModel setzen.
        this.myform.find('username').setErrors({ invalidLogin: true });

        console.log(this.myform.value);
    }
}