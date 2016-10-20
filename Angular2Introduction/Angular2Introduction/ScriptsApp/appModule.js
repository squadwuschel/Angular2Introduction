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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var mainApp_1 = require('./mainApp');
var http_1 = require('@angular/http');
//eigene direktiven/componenten
var autoGrow_directive_1 = require('./directives/autoGrow.directive');
var personList_component_1 = require('./components/personList.component');
var courses_component_1 = require('./components/courses.component');
var customHttp_1 = require("./services/customHttp");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            //http://stackoverflow.com/questions/39062930/what-is-difference-between-declarations-providers-and-import-in-ngmodule
            imports: [
                forms_1.FormsModule,
                platform_browser_1.BrowserModule,
                http_1.HttpModule
            ],
            declarations: [
                mainApp_1.AppComponent,
                autoGrow_directive_1.AutoGrowDirective,
                personList_component_1.PersonList,
                courses_component_1.CoursesComponent,
            ],
            //http://stackoverflow.com/questions/38885912/angular-2-rc-5-bootstrap-custom-http-class
            providers: [{ provide: http_1.Http, useFactory: function (backend, defaultOptions) {
                        return new customHttp_1.CustomHttp(backend, defaultOptions);
                    },
                    deps: [http_1.XHRBackend, http_1.RequestOptions]
                }],
            bootstrap: [mainApp_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=appModule.js.map