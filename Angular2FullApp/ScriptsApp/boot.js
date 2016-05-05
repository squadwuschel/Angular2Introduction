"use strict";
//Die Reference Zeile zwinged notwendig, damit die Typings alle gefunden werden für Angular und zugehörige Komponenten!
//Wenn ES5 Target angegeben wurde!
///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
var browser_1 = require('angular2/platform/browser');
var mainApp_1 = require('./mainApp');
var http_1 = require('angular2/http');
var router_1 = require('angular2/router');
browser_1.bootstrap(mainApp_1.MainApp, [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS]);
//# sourceMappingURL=boot.js.map