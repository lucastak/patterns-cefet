import { PersonagemBuild } from "./PersonagemBuild";

const builder = new PersonagemBuild();

console.log(builder.getPersonagem().listarItens());
console.log("");

builder
  .addRoupa("Vestes vampíricas")
  .addArmadura("Armadura leve de malha")
  .addEscudo("Escudo do Alucard")
  .addArma("Crissaegrim");
console.log(builder.getPersonagem().listarItens());
console.log("");

builder.reset();
console.log(builder.getPersonagem().listarItens());
console.log("");

builder.addArma("Sephiroth's Masamune");
console.log(builder.getPersonagem().listarItens());
