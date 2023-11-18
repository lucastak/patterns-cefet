export interface IBancoDeDados {
    conectar(): void;
    consultar(query: string): void;
}