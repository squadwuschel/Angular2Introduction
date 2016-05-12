import {bootstrap} from '@angular/platform-browser-dynamic'
import {AppComponent} from './views/mainApp'
import {HTTP_PROVIDERS} from '@angular/http'

bootstrap(AppComponent, [HTTP_PROVIDERS]);