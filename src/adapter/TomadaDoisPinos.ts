import { AdapterTomada } from "./AdapterTomada";

export class TomadaDoisPinos extends AdapterTomada{
    ligar(energia: string): void {
        console.log("energia TomadaDoisPinos", energia);
    }
}