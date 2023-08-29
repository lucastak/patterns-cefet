import { ITomadaTresPinos } from "./ITomadaTresPinos";
import { TomadaDoisPinos } from "./TomadaDoisPinos";

export class AdapterTomada implements ITomadaTresPinos{
    ligar(energia: string): void {
        const tomada = new TomadaDoisPinos();
        tomada.ligar(energia);
    }

}