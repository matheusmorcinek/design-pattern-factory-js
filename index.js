function createEmployee(name, lastname) {

    const employee = {};

    employee.name = name;
    employee.lastname = lastname;

    function completeName() {
        return `${name} ${lastname}`;
    }

    employee.completeName = completeName;

    return employee;
}

const employeeA = createEmployee('Matheus', 'Morcinek');

console.log(employeeA);

console.log(employeeA.completeName());


const employeeB = createEmployee('Bruna', 'Zacarias');

console.log(employeeB);

console.log(employeeB.completeName());