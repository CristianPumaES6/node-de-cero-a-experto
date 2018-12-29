//const multiplicar = require('./1_tablas/multiplicar.js');
//multiplicar.crearArchivo(2);

const { crearArchivo: newArchivo } = require('./1_tablas/multiplicar.js');

newArchivo("s")
    .then(
        archivo => console.log(`Archivo creado: ${archivo}`)
    )
    .catch(
        err => console.log(err)
    );

