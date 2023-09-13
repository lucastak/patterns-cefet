import { BaseDecorator } from "./BaseDecorator";

export class golafechada extends BaseDecorator {

    constructor(private base: BaseDecorator) {
        super();        
    }

    precoFinal(): number {
        console.log('gola fechada + 15');
        return this.base.precoFinal() + 15;
    }    
}