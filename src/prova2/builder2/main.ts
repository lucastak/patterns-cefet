// Classe que representa o personagem
class Personagem {
    private roupa: string = "Roupa Básica";
    private acessorios: string[] = [];

    adicionarRoupa(roupa: string): void {
        this.roupa = roupa;
    }

    adicionarAcessorio(acessorio: string): void {
        this.acessorios.push(acessorio);
    }

    mostrarPersonagem(): void {
        console.log(`Personagem com ${this.roupa} e acessórios: ${this.acessorios.join(', ')}`);
    }
}

interface PersonagemBuilder {
    construirRoupa(): void;
    construirAcessorios(): void;
    adicionarOutroAcessorio(acessorio: string): void;
    obterPersonagem(): Personagem;
}

// Implementação concreta do Builder
class ConstrutorPersonagem implements PersonagemBuilder {
    private personagem: Personagem = new Personagem();

    construirRoupa(): void {
        this.personagem.adicionarRoupa("Armadura de Couro"); // Roupa inicial
    }

    construirAcessorios(): void {
        this.personagem.adicionarAcessorio("Espada"); // Acessório inicial
        this.personagem.adicionarAcessorio("Escudo"); // Acessório inicial
    }

    adicionarOutroAcessorio(acessorio: string): void {
        this.personagem.adicionarAcessorio(acessorio);
    }

    obterPersonagem(): Personagem {
        return this.personagem;
    }
}

// Diretor que utiliza o builder para construir o personagem
class Diretor {
    construirPersonagem(builder: PersonagemBuilder): Personagem {
        builder.construirRoupa();
        builder.construirAcessorios();
        return builder.obterPersonagem();
    }
}

// Uso do Builder
const diretor = new Diretor();
const construtor = new ConstrutorPersonagem();

// Construir o personagem
const personagemFinal = diretor.construirPersonagem(construtor);

// Adicionar outro acessório dinamicamente
construtor.adicionarOutroAcessorio("Arco");

// Mostrar o personagem final
personagemFinal.mostrarPersonagem();
