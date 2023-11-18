import { AbstracaoImpressora } from "./AbstracaoImpressora";
import { Impressao } from "./I-Impressao";
import { ImpressaoUsuario } from "./ImpressaoUsuario";
import { ImpressaoAutomatizada } from "./ImpressoraAutomatizada";
import { ImpressoraColorida } from "./ImpressoraColorida";
import { ImpressoraPB } from "./ImpressoraPretoeBranco";
import { Ploter } from "./Ploter";

const impressoraPB: Impressao = new ImpressoraPB();
const impressoraColorida: Impressao = new ImpressoraColorida();
const plotter: Impressao = new Ploter();

const impressaoAutomatizadaPB: AbstracaoImpressora = new ImpressaoAutomatizada(impressoraPB);
const impressaoUsuarioColorida: AbstracaoImpressora = new ImpressaoUsuario(impressoraColorida, "Cabeçalho personalizado");

impressaoAutomatizadaPB.imprimir("Documento automatizado");
impressaoUsuarioColorida.imprimir("Documento do usuário");