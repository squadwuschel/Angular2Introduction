"use strict";
var UsernameValidators = (function () {
    function UsernameValidators() {
    }
    UsernameValidators.cannotContainSpace = function (control) {
        if (control.value.indexOf(' ') >= 0) {
            //Object zurückgeben, wenn die Validierung fehlgeschlagen ist.
            return { cannotContainSpace: true };
        }
        //Bei alles OK, wird null zurückgegeben.
        return null;
    };
    return UsernameValidators;
}());
exports.UsernameValidators = UsernameValidators;
//# sourceMappingURL=usernameValidators.js.map