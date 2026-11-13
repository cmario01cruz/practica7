
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Ingrese la cantidad de departamentos: ", (respuestaDepartamentos) => {

    let departamentos = Number(respuestaDepartamentos);

    if (isNaN(departamentos) || departamentos <= 0 || !Number.isInteger(departamentos)) {
        console.log("Error: Ingrese una cantidad valida de departamentos.");
        rl.close();
        return;
    }


    rl.question("Ingrese la cantidad de empleados por departamento: ", (respuestaEmpleados) => {

        let empleados = Number(respuestaEmpleados);

        if (isNaN(empleados) || empleados <= 0 || !Number.isInteger(empleados)) {
            console.log("Error: Ingrese una cantidad valida de empleados.");
            rl.close();
            return;
        }

        console.log("\n========== MATRIZ DE ASISTENCIA ==========");


        for (let departamento = 1; departamento <= departamentos; departamento++) {

            console.log("\nDepartamento " + departamento);

            // Determinar turno
            let turno;

            if (departamento % 2 !== 0) {
                turno = "Mañana";
            } else {
                turno = "Tarde";
            }

      
            for (let empleado = 1; empleado <= empleados; empleado++) {

                console.log(
                    "Empleado " + empleado + " | Turno: " + turno
                );
            }
        }

        console.log("\n==========================================");

        rl.close();
    });
});
