const { argv } = require('./config/yargs');
const porHacer = require('./por_hacer/por_hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea)
        break;
    case 'actualizar':
        console.log('tareas por actualizar');
        break;
    default:
        console.log('Default.');
        break;
}