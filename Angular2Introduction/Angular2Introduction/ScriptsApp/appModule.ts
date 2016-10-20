import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {AppComponent} from './mainApp'
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http'

//eigene direktiven/componenten
import {AutoGrowDirective} from './directives/autoGrow.directive';
import {PersonList} from './components/personList.component';
import {CoursesComponent} from './components/courses.component';
import {CustomHttp} from "./services/customHttp"

@NgModule({
    //http://stackoverflow.com/questions/39062930/what-is-difference-between-declarations-providers-and-import-in-ngmodule
    imports: [
        FormsModule,
        BrowserModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        AutoGrowDirective,
        PersonList,
        CoursesComponent,
    ],
    //http://stackoverflow.com/questions/38885912/angular-2-rc-5-bootstrap-custom-http-class
    providers: [ { provide: Http, useFactory: (backend: XHRBackend, defaultOptions: RequestOptions) => {
                            return new CustomHttp(backend, defaultOptions); },
            deps: [XHRBackend, RequestOptions]
        }],
    bootstrap: [AppComponent]
})

export class AppModule { }

