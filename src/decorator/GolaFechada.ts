import { BaseDecorator } from "./BaseDecorator";

export class golafechada extends BaseDecorator {
    private base: BaseDecorator;

    constructor(classebase: BaseDecorator) {
        super();
        this.base = classebase;        
    }

    precoFinal(): number {
        console.log('gola fechada + 15');
        return this.base.precoFinal() + 15;
    }    
}