export class Produto{
    private static instance: Produto;
    
    idProduto: number = 0;
    nomeProduto: string = "";

    private constructor() { };

    public static getInstance(): Produto{
        if (!Produto.instance) {
            Produto.instance = new Produto();
        }

        return Produto.instance;
    }
}

