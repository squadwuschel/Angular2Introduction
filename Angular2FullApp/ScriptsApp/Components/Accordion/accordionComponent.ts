import {Component, Input} from 'angular2/core';

/* Verwendung
*  <accordion heading="Titel"><div class="accordion-body">Body Content</div> </accordion>
*/
@Component({
    selector: 'accordion',
    templateUrl: `Templates/Accordion`,
})
export class AccordionComponent {
    public isOpen: boolean = true;
    @Input() public heading: string = "";

    constructor() {
        //Im Konstruktor einfach per DI einen Service injecten, dieser muss auch in Providers bekannt gemacht werden
    }
}