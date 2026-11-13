
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Ingrese la cantidad de lineas de ensamblaje: ", (respuestaLineas) => {

    let lineas = Number(respuestaLineas);

    if (isNaN(lineas) || !Number.isInteger(lineas) || lineas <= 0) {
        console.log("Error: Ingrese una cantidad valida de lineas.");
        rl.close();
        return;
    }

   
    rl.question("Ingrese la cantidad de sensores por linea: ", (respuestaSensores) => {

        let sensores = Number(respuestaSensores);

        if (isNaN(sensores) || !Number.isInteger(sensores) || sensores <= 0) {
            console.log("Error: Ingrese una cantidad valida de sensores.");
            rl.close();
            return;
        }

        console.log("\n========== TABLERO DE SENSORES ==========");

       
        for (let linea = 1; linea <= lineas; linea++) {

            console.log("\nLinea de ensamblaje " + linea);

            
            for (let sensor = 1; sensor <= sensores; sensor++) {

                
                let rendimiento = linea * sensor * 5;

                
                if (rendimiento >= 50) {

                    console.log(
                        "Sensor " + sensor +
                        " | Rendimiento: " + rendimiento +
                        " | Estado: Optimo "
                    );

                } else if (rendimiento >= 25 && rendimiento <= 49) {

                    console.log(
                        "Sensor " + sensor +
                        " | Rendimiento: " + rendimiento +
                        " | Estado: Mantenimiento Preventivo "
                    );

                } else {

                    console.log(
                        "Sensor " + sensor +
                        " | Rendimiento: " + rendimiento +
                        " | Estado: Falla de Lectura "
                    );
                }
            }
        }

        console.log("\n==========================================");

        rl.close();
    });
});
