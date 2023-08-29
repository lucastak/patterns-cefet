import { ITomadaTresPinos } from "./ITomadaTresPinos";

export class Cliente{
    constructor(adapter: ITomadaTresPinos) {
        this.main(adapter);
    }

    main(adapter: ITomadaTresPinos): void {
        adapter.ligar("ligar")
    }
}