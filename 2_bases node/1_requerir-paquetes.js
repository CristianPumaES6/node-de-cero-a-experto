//instalamos el paquete 
//desde terminal npm }
const fs = require('fs');

let base = 3;
let data = '';

for (let i = 0; i <= 10; i++) {
    data = `${base} * ${i} = ${base * i}`;
}

fs.writeFile(`1_tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`el archivo de la tabla del ${base} a sido creado`);
});