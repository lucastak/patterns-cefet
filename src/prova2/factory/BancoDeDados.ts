import { IBancoDeDados } from "./IBancoDeDados";

export class BancoDeDados implements IBancoDeDados {
    conectar(): void {
      console.log('Conectando ao banco de dados');
    }
  
    consultar(query: string): void {
      console.log(`Executando a consulta: ${query}`);
    }
  }