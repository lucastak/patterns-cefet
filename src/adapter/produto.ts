export interface IProduto {
    idProduto: number;
    nomeProduto: string;
}

export class Produto {
    idProduto: number = 0;
    nomeProduto: string = '';

    constructor(json?: any) {
        if (json) {
            this.idProduto = json.idProduto;
            this.nomeProduto = json.nomeProduto;
        }
    };
    
}


export class Bola extends Produto {
    constructor() {
        super();

        this.idProduto = 1;
        this.nomeProduto = 'bola';
    };
}