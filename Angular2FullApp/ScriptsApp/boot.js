"use strict";
//Die Reference Zeile zwinged notwendig, damit die Typings alle gefunden werden für Angular und zugehörige Komponenten!
//Wenn ES5 Target angegeben wurde!
///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
var browser_1 = require('angular2/platform/browser');
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var mainApp_1 = require('./mainApp');
browser_1.bootstrap(mainApp_1.MainApp, [
    http_1.HTTP_PROVIDERS,
    router_1.ROUTER_PROVIDERS,
    //Eigene Direktiven oder auch z.b. auch Routing Direktiven global verfügbar machen
    //http://blog.thoughtram.io/angular2/2015/11/23/multi-providers-in-angular-2.html
    core_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: router_1.ROUTER_DIRECTIVES, multi: true }),
]);
//# sourceMappingURL=boot.js.map