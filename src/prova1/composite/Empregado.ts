import IDepartmento from "./Idepartmento";

class Empregado implements IDepartmento {
  constructor(private name: string, private salary: number) {}

  calculaSalario(): number {
    if (this.salary >= 5000) {
      return this.salary * 0.75; // 25% de imposto
    } else {
      return this.salary * 0.85; // 15% de imposto
    }
  }
}
export default Empregado;
