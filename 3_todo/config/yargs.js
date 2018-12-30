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
    .command('crear', 'Registra una nueva tarea.', opts)
    .command('listar', 'Listar toda las tareas', opts)
    .command('actualizar', 'Actualiza el estado de una tarea', opts)
    .command('borrar', 'Actualiza el estado de una tarea', opts)
    .help()
    .argv;


module.exports = {
    argv
}