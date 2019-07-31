
const descripcion = {
        demand: true,
        alias: 'd',
        desc: 'descripción de la tarea por hacer'
};

const completado = {
        default: true,
        alias: 'c',
        desc: 'Marca como completado la tarea por hacer'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento ToDo', {descripcion})
    .command('actualizar', 'Actualiza el estado a completado de una tarea', {descripcion, completado} )
    //.command('listar', 'Borra las tareas por hacer programadas', {descripcion, completado})
    .command('borrar', 'Borra las tareas por hacer programadas', {descripcion})
    .help()
    .argv;


module.exports = {
    argv
}