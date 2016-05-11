import {Component, Input} from 'angular2/core';

@Component({
    selector: 'loading-spinner',
    template: `<i *ngIf="visible" class="fa fa-fw fa-spinner fa-spin fa-3x"></i>`,
})
export class LoadingSpinnerComponent {
    @Input() public visible : boolean = false;

    constructor() {
        //Im Konstruktor einfach per DI einen Service injecten, dieser muss auch in Providers bekannt gemacht werden
    }
}