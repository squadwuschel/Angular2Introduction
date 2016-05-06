import {Component} from 'angular2/core';
import {Router, CanDeactivate} from 'angular2/router';
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';

import {AddUserValidators} from './addUserValidators';
import {PersonService} from './../../Services/personService';
import {User} from './../../TsClasses/JsonPlaceHolderClasses'

@Component({
    selector: 'addUser',
    templateUrl: `Templates/AddUser`,
    providers: [PersonService], //Dipendency Injection (z.B. Services)
    directives: [], //die verwendeten Direktiven
})
export class AddUserComponent implements CanDeactivate {
    public myform: ControlGroup;
    public user: User;

    constructor(private formBuilder: FormBuilder, private router: Router, private personSrv: PersonService) {

        this.user = new User();
        this.user.address.street = "Vellerner Str.";

        this.myform = formBuilder.group({
            //Mehrere Validatoren mit Compose zusammenfassen
            name: new Control(this.user.name, Validators.required),
            email: new Control(this.user.email, Validators.compose([Validators.required, AddUserValidators.valideEmail])),
            phone: new Control(this.user.email),
            address: formBuilder.group({
                street: new Control(this.user.address.street),
                suite: new Control(this.user.address.suite),
                city: new Control(this.user.address.city),
                zipCode: new Control(this.user.address.zipcode)
            })
        });
    }

    public save(): void {
        this.myform.setErrors(null);

        //Der myForm.value entspricht genau dem JSON Objekt welches vom Servicer erwartet wird!
        console.log(this.myform.value);
        //ist nur Fake Service Call, der user wird dort nicht hinzugefügt!
        this.personSrv.addUser(this.myform.value)
            .subscribe(res => {
                this.router.navigate(['Users']);
            });
    }

    public isFormValide(): boolean {
        return !this.myform.valid;
    }

    //Dirty Tracking Form and Prevent to leave the current form
    routerCanDeactivate(nextInstruction: Object, prevInstruction: Object): boolean | Promise<boolean> {
        if (this.myform.dirty) {
            return confirm("Wollen sie wirklich wechseln?");
        }

        return true;
    }
}