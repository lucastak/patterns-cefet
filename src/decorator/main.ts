import { BaseDecorator } from "./BaseDecorator";
import { estampacostas } from "./estampacostas";
import { estampafrente } from "./estampafrente";
import { golafechada } from "./GolaFechada";
import { mangalonga } from "./MangaLonga";

let camisa: BaseDecorator = new BaseDecorator();
console.log('camisa básica - ' + camisa.precoFinal());
let estfrente: estampafrente = new estampafrente(camisa);
//let estcostas: estampacostas = new estampacostas(estfrente);
//let manglonga: mangalonga = new mangalonga(estcostas);
//let glfech: golafechada = new golafechada(manglonga);

console.log('total: ' + estfrente.precoFinal());