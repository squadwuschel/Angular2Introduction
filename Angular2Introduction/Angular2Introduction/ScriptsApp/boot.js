"use strict";
///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
var browser_1 = require('angular2/platform/browser');
var mainApp_1 = require('./views/mainApp');
var http_1 = require('angular2/http');
browser_1.bootstrap(mainApp_1.AppComponent, [http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=boot.js.map