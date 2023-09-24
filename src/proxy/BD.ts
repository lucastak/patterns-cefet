import { iBD } from "./iBD";

export class BD implements iBD {
    getTodasVendas(): string {
        console.log('chamou getTodasVendas() na classe BD');
        return 'todas as vendas classe BD';
    }
}