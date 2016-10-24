import { Component } from '@angular/core';


//@Injectable()
@Component({
    selector: 'hallo-welt',
    template: `<div class="well well-small"><p>{{halloWelt}}</p></div>`,
})
export class HalloWelt {
    public halloWelt : string ;

    constructor() {
        this.halloWelt = "Hallo Welt hier ist SquadWuschel";
    }
}