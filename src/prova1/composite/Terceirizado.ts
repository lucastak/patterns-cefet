import IDepartamento from "./Idepartmento";

class Terceirizado implements IDepartamento {
  constructor(private name: string, private salary: number) {}

  calculaSalario(): number {
    return this.salary * 0.89; // 11% de imposto
  }
}
export default Terceirizado;
