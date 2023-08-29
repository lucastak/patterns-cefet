import { ITomadaTresPinos } from "./ITomadaTresPinos";
import { TomadaDoisPinos } from "./TomadaDoisPinos";

export class Cliente implements ITomadaTresPinos{
    constructor() {
        this.ligar("teste ligar");
    }

    ligar(energia: string): void {
        const tomada = new TomadaDoisPinos();
        tomada.ligar(energia);
    }
}