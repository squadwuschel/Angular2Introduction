import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {AppComponent} from './mainApp'
import {HTTP_PROVIDERS} from '@angular/http'

@NgModule({
    imports: [
        FormsModule,
        BrowserModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent],
    providers: [HTTP_PROVIDERS]
})

export class AppModule { }

