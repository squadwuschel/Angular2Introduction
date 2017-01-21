    import { NgModule, ValueProvider } from '@angular/core';
    import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
    
    //Custom Http
    import { HttpSubjectService } from './httpSubject.service';
    import { CustomHttp } from './customHttp';
    
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
                provide: Http, useFactory: (backend: XHRBackend, defaultOptions: RequestOptions, httpSubjectService: HttpSubjectService) => {
                    return new CustomHttp(backend, defaultOptions, httpSubjectService);
                },
                deps: [XHRBackend, RequestOptions, HttpSubjectService]
            }
        ]
    })
    export class CustomHttpCoreModule {
    
        constructor() { }
    }