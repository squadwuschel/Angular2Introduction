"use strict";
var AddUserValidators = (function () {
    function AddUserValidators() {
    }
    AddUserValidators.valideEmail = function (control) {
        var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (control.value && !control.value.match(pattern)) {
            //Object zurückgeben, wenn die Validierung fehlgeschlagen ist, mit Infos warum die Validierung fehlgeschlagen ist.
            return { valideEmail: true };
        }
        //Bei alles OK, wird null zurückgegeben.
        return null;
    };
    return AddUserValidators;
}());
exports.AddUserValidators = AddUserValidators;
//# sourceMappingURL=addUserValidators.js.map