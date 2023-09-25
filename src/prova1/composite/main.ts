import DepartmentComposite from "./DepartamentoComposite";
import Empregado from "./Empregado";
import Terceirizado from "./Terceirizado";

// Criar funcionários
const empregado1 = new Empregado("Funcionário 1", 6000);
const empregado2 = new Empregado("Funcionário 2", 4000);

// Criar terceirizados
const terceirizado1 = new Terceirizado("Terceirizado 1", 3000);
const terceirizado2 = new Terceirizado("Terceirizado 2", 8000);

// Criar departamento composto
const departmento = new DepartmentComposite();
departmento.addSubDepartamento(empregado1);
departmento.addSubDepartamento(empregado2);
departmento.addSubDepartamento(terceirizado1);
departmento.addSubDepartamento(terceirizado2);

// Calcular salário líquido do departamento
const totalSalary = departmento.calculaSalario();
console.log(`Salário líquido total do departamento: R$ ${totalSalary.toFixed(2)}`);
