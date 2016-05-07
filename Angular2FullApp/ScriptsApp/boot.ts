//Die Reference Zeile zwinged notwendig, damit die Typings alle gefunden werden für Angular und zugehörige Komponenten!
//Wenn ES5 Target angegeben wurde!
///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser'
import {PLATFORM_DIRECTIVES, provide} from 'angular2/core';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {MainApp} from './mainApp'


bootstrap(MainApp, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    //Eigene Direktiven oder auch z.b. auch Routing Direktiven global verfügbar machen,
    //Damit müssen wir nicht in jeder Komponetne in der wir z.b. links verwenden die Routing Directives importieren
    //http://blog.thoughtram.io/angular2/2015/11/23/multi-providers-in-angular-2.html
    provide(PLATFORM_DIRECTIVES, { useValue: ROUTER_DIRECTIVES , multi: true }),
    ]);