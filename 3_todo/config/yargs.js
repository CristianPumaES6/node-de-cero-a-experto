const opts = {
    descripcion: {
        alias: 'd'
    },
    completado:{
        alias:'c',
        default: true
    }
};

const opts2 = {
    descripcion: {
        demand: true,
        alias: 'd'
    }
};
const argv = require('yargs')
    .command('listar', 'Actualiza el estado de una tarea', opts)
    .command('crear', 'Registra una nueva tarea.', opts)
    .help()
    .argv;


module.exports = {
    argv
}