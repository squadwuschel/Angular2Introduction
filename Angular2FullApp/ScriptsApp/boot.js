"use strict";
/// <reference path="./../node_modules/typings/browser.d.ts" />
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var http_1 = require('@angular/http');
var mainApp_1 = require('./mainApp');
platform_browser_dynamic_1.bootstrap(mainApp_1.MainApp, [
    http_1.HTTP_PROVIDERS,
    router_deprecated_1.ROUTER_PROVIDERS,
    //Eigene Direktiven oder auch z.b. auch Routing Direktiven global verfügbar machen,
    //Damit müssen wir nicht in jeder Komponetne in der wir z.b. links verwenden die Routing Directives importieren
    //http://blog.thoughtram.io/angular2/2015/11/23/multi-providers-in-angular-2.html
    core_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: router_deprecated_1.ROUTER_DIRECTIVES, multi: true }),
]);
//# sourceMappingURL=boot.js.map