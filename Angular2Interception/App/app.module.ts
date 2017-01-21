import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./Views/app.component";
import { Homeservice } from "./HttpServices/home.service";
import { CustomHttpCoreModule } from "./HttpInterception/customHttp.core.module";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        CustomHttpCoreModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent],
    providers: [Homeservice]
})
export class AppModule {

    constructor() {
    }

}