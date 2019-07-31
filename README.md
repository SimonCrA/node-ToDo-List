## Programa de consola para crear, actualizar, listar, borrar un ToDo List

Este programa hecho en node permite crear y administrar una lista de cosas por hacer.

Al momento de clonar el repositorio se debe ejecutar el comando 

```
npm install

```

para comenzar a utilizar el programa se debe seguir este procedimiento:

Para crear un tarea por hacer

```
node app crear -d correr

```
Este comando le dice al programa que cree una tarea llamada "correr".

Para actualizar un tarea por hacer

```
node app actualizar -d correr -c true

```
Este comando le dice al programa que actualice la tarea llamada "correr" colocandole el valor true que significa que ya está hecha.

Para listar las tareas

```
node app listar

```
Este comando le dice al programa que muestre una lista de todas las tareas creadas con su estado.

Para borrar un tarea por hacer

```
node app borrar -d correr

```
Este comando le dice al programa que borre una tarea llamada "correr".

