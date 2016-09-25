import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {AppComponent} from './mainApp'
import {HttpModule} from '@angular/http'

//eigene direktiven/componenten
import {AutoGrowDirective} from './directives/autoGrow.directive';
import {PersonList} from './components/personList.component';
import {CoursesComponent} from './components/courses.component';

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
    bootstrap: [AppComponent],
})

export class AppModule { }

