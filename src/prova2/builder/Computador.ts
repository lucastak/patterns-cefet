
export class Computador {
    private componentes: string[] = [];

    addComponente(memoria: string, processador: string, tela: string) {
        this.componentes.push(`Memória: ${memoria}`, `Processador: ${processador}`, `Tela: ${tela}`);
    }

    mostrarInfo() {
        console.log("Componentes do Computador:");
        console.log(this.componentes.join(', '));
    }
}