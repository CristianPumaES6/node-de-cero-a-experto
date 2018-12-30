
const colors = require('colors');

const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 12
    }
};

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
    .help()
    .argv;


    console.log('=============='.green);
    console.log(`=YARGS OK=`.blue)
    console.log('=============='.green);

module.exports = {
    argv
}