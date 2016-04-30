"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var TruncatePipe = (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, args) {
        if (value) {
            var length = 10;
            var end = "...";
            //Erstes Arg ist die Länge des Strings
            if (args.length > 0) {
                length = parseInt(args[0]);
            }
            //Das zweite Argument ist der Wert mit dem das ende dargestellt werden soll z.B. "..."
            if (args.length > 1) {
                end = args[1];
            }
            if (value.length <= length || value.length - end.length <= length) {
                return value;
            }
            else {
                return String(value).substring(0, length - end.length) + end;
            }
        }
        return value;
    };
    TruncatePipe = __decorate([
        core_1.Pipe({ name: 'truncate' }), 
        __metadata('design:paramtypes', [])
    ], TruncatePipe);
    return TruncatePipe;
}());
exports.TruncatePipe = TruncatePipe;
//# sourceMappingURL=truncate.pipe.js.map