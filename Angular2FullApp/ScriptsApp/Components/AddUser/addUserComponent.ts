import {Component} from 'angular2/core';
import {Router, CanDeactivate, RouteParams} from 'angular2/router';
import {ControlGroup, Control, Validators, FormBuilder, NgForm} from 'angular2/common';

import {EmailValidatorDirective} from './emailValidatorDirective';
import {PersonService} from './../../Services/personService';
import {User} from './../../TsClasses/JsonPlaceHolderClasses'

@Component({
    selector: 'addUser',
    templateUrl: `Templates/AddUser`,
    providers: [PersonService], //Dipendency Injection (z.B. Services)
    directives: [EmailValidatorDirective], //die verwendeten Direktiven
})
export class AddUserComponent implements CanDeactivate {
    //public myform: ControlGroup = new ControlGroup({});
    public user: User;


    //Gute Quelle für Forms in NG2
    //http://blog.ng-book.com/the-ultimate-guide-to-forms-in-angular-2/
    //Quelle für Template driven forms
    //http://blog.thoughtram.io/angular/2016/03/21/template-driven-forms-in-angular-2.html
    //Custom Validation:
    //http://blog.thoughtram.io/angular/2016/03/14/custom-validators-in-angular-2.html

    constructor(private formBuilder: FormBuilder, private router: Router, private personSrv: PersonService) {

        

        this.user = new User();
        this.user.address.street = "Vellerner Str.";

        //this.myform = formBuilder.group({
        //    //Mehrere Validatoren mit Compose zusammenfassen
        //    name: new Control('', Validators.required),
        //    email: new Control('', Validators.compose([Validators.required])),
        //    phone: new Control(''),
        //    address: formBuilder.group({
        //        street: new Control(''),
        //        suite: new Control(''),
        //        city: new Control(''),
        //        zipCode: new Control('')
        //    })
        //});
    }

    public save(frm: NgForm): void {

        //this.myform.setErrors(null);

        //Der myForm.value entspricht genau dem JSON Objekt welches vom Servicer erwartet wird!
        console.log(frm.value);
        //ist nur Fake Service Call, der user wird dort nicht hinzugefügt!
        this.personSrv.addUser(this.user)
            .subscribe(res => {
                this.router.navigate(['Users']);
            });
    }

    public isFormValide(frm: NgForm): boolean {
        return !frm.valid;
    }

    //Dirty Tracking Form and Prevent to leave the current form
    routerCanDeactivate(nextInstruction: Object, prevInstruction: Object): boolean | Promise<boolean> {
        //TODO access myForm!
        //if (this.myform.dirty) {
        //    return confirm("Wollen sie wirklich wechseln?");
        //}

        return true;
    }
}