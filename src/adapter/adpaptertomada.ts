import { iTomadaTresPinos } from "./itomadatrespinos";
import { Produto } from "./produto";
import { TomadaDoisPinos } from "./tomadadoispinos";

export class adaptertomada implements iTomadaTresPinos {
    ligar(energiaJSON: string) {
        let doispinos: TomadaDoisPinos = new TomadaDoisPinos();
        let obj = new Produto(JSON.parse(energiaJSON));
        doispinos.ligar(this.converterProdutoXml(obj));
        console.log('ligou tomada dois pinos');
    }

    converterProdutoXml(obj: Produto): string {
        // create xml string
        let xml = '';
        xml += "<idProduto>";
        xml += obj.idProduto;
        xml += "</idProduto>";
        xml += "<NomeProduto>";
        xml += obj.nomeProduto;
        xml += "</NomeProduto>";                
        return xml;
    }    
}