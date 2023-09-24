import { Produto } from "./produto";
import { iTomadaTresPinos } from "./itomadatrespinos";

export class cliente {
    constructor(private tmd: iTomadaTresPinos) {};

    ligarTomada(): void {
        let prd: Produto = new Produto();
        prd.idProduto = 1
        prd.nomeProduto = 'teste';
        let energiaJSON = JSON.stringify(prd);
        console.log('ligou tomada tres pinos');
        console.log(energiaJSON);
        this.tmd.ligar(energiaJSON);
    }
}

