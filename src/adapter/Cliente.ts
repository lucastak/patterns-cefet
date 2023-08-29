import { TomadaDoisPinos } from "./TomadaDoisPinos";

export class Cliente{
    private tomada: TomadaDoisPinos = new TomadaDoisPinos();

    constructor() {
        this.main();
    }

    main(): void {
        this.tomada.ligar("ativar")
    }
}