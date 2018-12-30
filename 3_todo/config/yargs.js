
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Describe una tarea.'
};
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca true como completado o false pendiente.'

};


const argv = require('yargs')
    .command('crear', 'Registra una nueva tarea.', {
        descripcion
    })
    .command('listar', 'Listar toda las tareas', {})
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Actualiza el estado de una tarea', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}