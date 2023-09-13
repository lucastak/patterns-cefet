import { BaseDecorator } from "./BaseDecorator";

export class estampafrente extends BaseDecorator {
    constructor(private base: BaseDecorator) {
        super();
    }

    precoFinal(): number {
        console.log('estampa frente + 20');
        return this.base.precoFinal() + 20;
    }    
}