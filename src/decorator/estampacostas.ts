import { BaseDecorator } from "./BaseDecorator";

export class estampacostas extends BaseDecorator {
    constructor(private base: BaseDecorator) {
        super();
    }

    precoFinal(): number {
        console.log('estampa costas + 10');
        return this.base.precoFinal() + 10;
    }    
}