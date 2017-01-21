import { NgModule, ValueProvider } from '@angular/core';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';

//Custom Http
import { HttpSubjectService } from './httpSubject.service';
import { CustomHttp as SxpCustomHttp } from './customHttp';

/**
 * Das HTTP Module was alle Providers enthält. KEINE Components oder Pipes!
 * Dieses Modul darf NUR ins CoreModules einbegunden werden.
 */
@NgModule({
    imports: [ ],
    providers: [
        HttpSubjectService,
        {
            //Wir erweitern die HTTP Abfrage und überall wo wir HTTP verwenden, wird unsere Implementierung verwendet.
            //Wir stellen an bestimmten Stellen des Requests RxJs Subjects zur Verfügung an die man sich bei Bedarf hängen kann per Subscribe
            provide: Http, useFactory: (backend: XHRBackend, defaultOptions: RequestOptions, sxpSubjectService: HttpSubjectService) => {
                return new SxpCustomHttp(backend, defaultOptions, sxpSubjectService);
            },
            deps: [XHRBackend, RequestOptions, HttpSubjectService]
        }
    ]
})
export class SxpCustomHttpCoreModule {

    constructor() { }
}