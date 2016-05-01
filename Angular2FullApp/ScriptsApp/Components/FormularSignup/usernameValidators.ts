import {Control} from 'angular2/common';

export class UsernameValidators {
    public static shouldBeUnique(control: Control) : Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === "mosh") {
                    resolve({ shouldBeUnique: true });
                } else {
                    resolve(null);
                }
            }, 1000);
        });
    }
    
    public static cannotContainSpace(control: Control) {
        if (control.value.indexOf(' ') >= 0) {
            //Object zurückgeben, wenn die Validierung fehlgeschlagen ist, mit Infos warum die Validierung fehlgeschlagen ist.
            return { cannotContainSpace: true };
        }

        //Bei alles OK, wird null zurückgegeben.
        return null;
    }
}