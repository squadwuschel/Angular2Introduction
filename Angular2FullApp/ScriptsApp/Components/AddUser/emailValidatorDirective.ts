import {Control} from '@angular/common';
import {Directive, provide, forwardRef} from '@angular/core';
import {NG_VALIDATORS} from '@angular/common';

//Wie erstellt man Validatoren auch als Direktive!
//http://blog.thoughtram.io/angular/2016/03/14/custom-validators-in-angular-2.html
@Directive({
    selector: '[validateEmail][ngControl],[validateEmail][ngModel],[validateEmail][ngFormControl]',
    providers: [
        provide(NG_VALIDATORS, {
            useExisting: forwardRef(() => EmailValidatorDirective),
            multi: true
        })
    ]
})
export class EmailValidatorDirective {

    validate(control: Control) {
        var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (control.value && !control.value.match(pattern)) {
            //Object zurückgeben, wenn die Validierung fehlgeschlagen ist, mit Infos warum die Validierung fehlgeschlagen ist.
            return { valideEmail: true };
        }

        //Bei alles OK, wird null zurückgegeben.
        return null;
    }
}



//Implementierung für FormBuilder
//export class AddUserValidators {
//    public static valideEmail(control: Control) {
//        var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
//        if (control.value && !control.value.match(pattern)) {
//            //Object zurückgeben, wenn die Validierung fehlgeschlagen ist, mit Infos warum die Validierung fehlgeschlagen ist.
//            return { valideEmail: true };
//        }

//        //Bei alles OK, wird null zurückgegeben.
//        return null;
//    }
//}