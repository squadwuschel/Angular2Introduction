import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Create an Angular 2 root NgModule
@NgModule({
    // import the Ng1ToNg2Module
    imports: [BrowserModule]
}) class SampleAppModule { }

// Create an upgrade adapter instance
import {UpgradeAdapter} from '@angular/upgrade';
let upgradeAdapter = new UpgradeAdapter(SampleAppModule);

// Manually bootstrap the app with the Upgrade Adapter (instead of ng-app)
upgradeAdapter.bootstrap(document.body, ['app.main']);
