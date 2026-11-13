
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Ingrese la cantidad de lotes a revisar: ", (respuestaLotes) => {

    let lotes = parseInt(respuestaLotes);

    if (isNaN(lotes) || lotes <= 0 || !Number.isInteger(lotes)) {
        console.log("Error: Ingrese una cantidad valida de lotes.");
        rl.close();
        return;
    }

 
    rl.question("Ingrese la cantidad de cajas por lote: ", (respuestaCajas) => {

        let cajas = parseInt(respuestaCajas);

        if (isNaN(cajas) || cajas <= 0 || !Number.isInteger(cajas)) {
            console.log("Error: Ingrese una cantidad valida de cajas.");
            rl.close();
            return;
        }

        console.log("\n========== CONTROL DE INVENTARIO ==========");

       
        for (let lote = 1; lote <= lotes; lote++) {

            console.log("\nLote " + lote);

            for (let caja = 1; caja <= cajas; caja++) {

                let codigo = lote * caja * 2;

                
                if (codigo % 4 === 0) {

                    console.log(
                        "Caja " + caja +
                        " | Codigo: " + codigo +
                        " | Revision Prioritaria "
                    );

                } else {

                    console.log(
                        "Caja " + caja +
                        " | Codigo: " + codigo +
                        " | Aprobado "
                    );
                }
            }
        }

        console.log("\n============================================");

        rl.close();
    });
});
