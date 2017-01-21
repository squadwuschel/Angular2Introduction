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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
//Custom Http
var httpSubject_service_1 = require('./httpSubject.service');
var customHttp_1 = require('./customHttp');
/**
 * Das HTTP Module was alle Providers enthält. KEINE Components oder Pipes!
 * Dieses Modul darf NUR ins CoreModules einbegunden werden.
 */
var CustomHttpCoreModule = (function () {
    function CustomHttpCoreModule() {
    }
    CustomHttpCoreModule = __decorate([
        core_1.NgModule({
            imports: [],
            providers: [
                httpSubject_service_1.HttpSubjectService,
                {
                    //Wir erweitern die HTTP Abfrage und überall wo wir HTTP verwenden, wird unsere Implementierung verwendet.
                    //Wir stellen an bestimmten Stellen des Requests RxJs Subjects zur Verfügung an die man sich bei Bedarf hängen kann per Subscribe
                    provide: http_1.Http, useFactory: function (backend, defaultOptions, sxpSubjectService) {
                        return new customHttp_1.CustomHttp(backend, defaultOptions, sxpSubjectService);
                    },
                    deps: [http_1.XHRBackend, http_1.RequestOptions, httpSubject_service_1.HttpSubjectService]
                }
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CustomHttpCoreModule);
    return CustomHttpCoreModule;
}());
exports.CustomHttpCoreModule = CustomHttpCoreModule;
//# sourceMappingURL=customHttp.core.module.js.map