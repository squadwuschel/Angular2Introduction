import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: '<h1 class="well well-sm text-center">Hello World to - {{name}}</h1>'
})
export class AppComponent {
    public name : string = "SquadWuschel";

    constructor() {
    }
}