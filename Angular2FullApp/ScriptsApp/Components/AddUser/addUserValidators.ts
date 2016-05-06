import {Control} from 'angular2/common';

export class AddUserValidators {
    public static valideEmail(control: Control) {
        var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (control.value && !control.value.match(pattern)) {
            //Object zurückgeben, wenn die Validierung fehlgeschlagen ist, mit Infos warum die Validierung fehlgeschlagen ist.
            return { valideEmail: true };
        }

        //Bei alles OK, wird null zurückgegeben.
        return null;
    }
}