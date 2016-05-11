import {Component, ViewChild, OnInit} from 'angular2/core';
import {Router, CanDeactivate, RouteParams} from 'angular2/router';
import {ControlGroup, NgForm} from 'angular2/common';

import {EmailValidatorDirective} from './emailValidatorDirective';
import {PersonService} from './../../Services/personService';
import {User} from './../../TsClasses/JsonPlaceHolderClasses'

@Component({
    selector: 'addUser',
    templateUrl: `Templates/AddUser`,
    providers: [PersonService], //Dipendency Injection (z.B. Services)
    directives: [EmailValidatorDirective], //die verwendeten Direktiven
})
export class AddUserComponent implements CanDeactivate, OnInit {
    //public myform: ControlGroup = new ControlGroup({});
    public user: User = new User();
    public isEditMode : boolean = false;

    @ViewChild('frm') public userFrm: NgForm;
    
    //Gute Quelle für Forms in NG2
    //http://blog.ng-book.com/the-ultimate-guide-to-forms-in-angular-2/
    //Quelle für Template driven forms
    //http://blog.thoughtram.io/angular/2016/03/21/template-driven-forms-in-angular-2.html
    //Custom Validation:
    //http://blog.thoughtram.io/angular/2016/03/14/custom-validators-in-angular-2.html

    constructor(private router: Router, private routeParams : RouteParams, private personSrv: PersonService) { }

    public ngOnInit() {
        let userId = this.routeParams.get('id');
        if (userId && parseInt(userId) > 0) {
            this.isEditMode = true;
            this.personSrv.getUserById(parseInt(userId)).subscribe(res => {
                 //TODO noch prüfen ob der User existiert, wenn nicht auf Not Found Seite umleiten
                 this.user = res;
            }, err => {
                if (err.status === 404) {
                    this.router.navigate(['NotFound']);
                }
            });
        }
    }

    public save(): void {
        //TODO wie setzt man das Form wieder zurück, das es nicht mehr dirty ist.
        //this.userFrm.setErrors(null);

        if (this.isEditMode) {
            //User aktualisieren
            this.personSrv.updateUser(this.user)
                .subscribe(x => {
                    //am besten das Form MarkAsPristine setzen, geht aber aktuell noch nicht!
                    this.router.navigate(['Users']);
                });
        } else {
            //ist nur Fake Service Call, der user wird dort nicht hinzugefügt!
            this.personSrv.addUser(this.user)
                .subscribe(res => {
                    this.router.navigate(['Users']);
                });    
        }
    }

    public isFormValide(): boolean {
        if (this.userFrm) {
            return !this.userFrm.valid;
        }
        return false;
    }

    //Dirty Tracking Form and Prevent to leave the current form
    routerCanDeactivate(nextInstruction: Object, prevInstruction: Object): boolean | Promise<boolean> {
        if (this.userFrm.dirty) {
            return confirm("Wollen sie wirklich wechseln?");
        }

        return true;
    }
}