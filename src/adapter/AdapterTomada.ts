import { ITomadaTresPinos } from "./ITomadaTresPinos";

export class AdapterTomada implements ITomadaTresPinos{
    ligar(energia: string): void {
        console.log("energia adapter", energia);
    }

}