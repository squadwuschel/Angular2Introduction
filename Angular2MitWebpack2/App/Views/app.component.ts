import { Component } from '@angular/core';

/**
 * Beschreibung
 *
 */
@Component({
    selector: 'app',
    templateUrl: './app.component.html',
})
export class AppComponent {
    private locals: AppLocalsModel = new AppLocalsModel();

    constructor() {}

    ngOnInit(): void {

    }
}

class AppLocalsModel {

}