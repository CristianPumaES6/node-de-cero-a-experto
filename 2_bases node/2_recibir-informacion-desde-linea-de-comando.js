
const { crearArchivo: newArchivo } = require('./1_tablas/multiplicar.js');

//por defecto tiene 2 valores el arreglo
//process.argv nos retorna un arreglo con los argumentos
let argv =  process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1]; //String.split() nos retorna una arreglo separados por (=) position del arreglo[1]
// eso solo retornara el 2 valor.

//la forma de enviar argumentos es desde terminal
//node prj.js --txt=3

console.log(base);

newArchivo("s")
    .then(
        archivo => console.log(`Archivo creado: ${archivo}`)
    )
    .catch(
        err => console.log(err)
    );
