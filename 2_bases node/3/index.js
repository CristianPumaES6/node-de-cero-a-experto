const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 12
        }
    })
    .command('crear', 'Genera un archivo con la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 12
        }
    })
    .help()
    .argv;

const { crearArchivo: newArchivo, listarTabla } = require('../1_tablas/multiplicar.js');
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        newArchivo(argv.base, argv.limite)
            .then(
                archivo => console.log(`Archivo creado: ${archivo}`)
            )
            .catch(
                err => console.log(err)
            );
        break;
    default:
        console.log('Error en el comando');
        break;
}