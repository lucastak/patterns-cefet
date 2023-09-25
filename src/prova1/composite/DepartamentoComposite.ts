import IDepartamento from "./Idepartmento";

class DepartamentoComposite implements IDepartamento {
  private subDepartamentos: IDepartamento[] = [];

  addSubDepartamento(subDepartamento: IDepartamento) {
    this.subDepartamentos.push(subDepartamento);
  }

  calculaSalario(): number {
    let totalSalary = 0;

    for (const subDepartamento of this.subDepartamentos) {
      totalSalary += subDepartamento.calculaSalario();
    }

    return totalSalary;
  }
}
export default DepartamentoComposite;
