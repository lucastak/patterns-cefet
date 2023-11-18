import { Caixa } from "./Caixa";

const caixa = new Caixa();
const computadorBasico = caixa.buildBasico();
computadorBasico.mostrarInfo();

const computadorMedio = caixa.buildMedio();
computadorMedio.mostrarInfo();

const computadorAvancado = caixa.buildAvancado();
computadorAvancado.mostrarInfo();
