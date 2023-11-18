import { CasaFlyweightFactory } from "./CasaFlywightFactory";

const casaFlyweightFactory = new CasaFlyweightFactory();

function criarCasa(tipo: string): void {
  const casaFlyweight = casaFlyweightFactory.obterCasa(tipo);
  casaFlyweight.exibir(tipo);
}

criarCasa("colonial");
criarCasa("colonial");
criarCasa("moderna");
criarCasa("de pedra");
criarCasa("gotica");
criarCasa("viking");
criarCasa("viking");

console.log(`Quantidade total de tipos de casas criadas: ${casaFlyweightFactory.obterQuantidadeCasas()}`);