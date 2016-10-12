/// <reference path="../../typings/index.d.ts" />
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeAdapter } from '@angular/upgrade';


// Create an Angular 2 root NgModule
@NgModule({
    // import the Ng1ToNg2Module
    imports: [BrowserModule]
}) export class AppModule { }

const upgradeAdapter = new UpgradeAdapter(AppModule);
upgradeAdapter.bootstrap(document.body, ['app.main']);