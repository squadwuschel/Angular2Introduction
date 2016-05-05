//Die Reference Zeile zwinged notwendig, damit die Typings alle gefunden werden für Angular und zugehörige Komponenten!
//Wenn ES5 Target angegeben wurde!
///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser'
import {MainApp} from './mainApp'
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(MainApp, [HTTP_PROVIDERS, ROUTER_PROVIDERS]);