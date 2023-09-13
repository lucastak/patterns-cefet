import { BaseDecorator } from "./BaseDecorator";

export class mangalonga extends BaseDecorator {
    constructor(private base: BaseDecorator) {
        super();
    }

    precoFinal(): number {
        console.log('manga longa + 10');
        return this.base.precoFinal() + 10;
    }    
}