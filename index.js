const readline = require('readline-sync');
const funciones = require('./funciones');
const Menu = require('./menu');
const tareas = [];

let opcion = 0;
let opcionSubMenus = 0;
let indiceTarea = 0;
let editar;



//Carga de prueba
funciones.crearTarea("Aprender HTML", tareas);
funciones.crearTarea("Aprender CSS", tareas);
funciones.crearTarea("Aprender Javascript", tareas);

do {
  Menu.principal();
  opcion = readline.questionInt('Seleccione una opcion: ');

  switch (opcion) {
    case 1:
      Menu.opcion1();
      opcionSubMenus = readline.questionInt('Seleccione una opcion: ');

      switch (opcionSubMenus) {
        case 1:
          
          if(tareas.length === 0){
            console.log("No tiene tareas ingresadas");
          } else {
            console.log('Estas son todas tus tareas');
            funciones.mostrarTodasTareas(tareas);    
            console.log("Deseas ver los detalles de alguna?");
            indiceTarea = readline.question("Introduce el numero para verla o 0 para volver: ")
            if (indiceTarea === 0){
              console.log("Selecciono volver");
            } else {

              indiceTarea--;
              console.log(indiceTarea);
              funciones.toString(tareas[indiceTarea]);
              editar = readline.question("Si deseas editarla presiona E, sino cualquier tecla para volver: ")
              if(editar.toLowerCase() === 'e'){
                funciones.editarTarea(tareas, indiceTarea);

              }
            }
          }
          break;
        case 2:
          console.log('Estas son todas tus tareas pendientes');
          funciones.mostrarTareasPendientes(tareas);
          break;
        case 3:
          console.log('Estas son todas tus tareas en curso');
          funciones.mostrarTareasEnCurso(tareas);
          break;
        case 4:
          console.log('Estas son todas tus tareas terminadas');
          funciones.mostrarTareasTerminadas(tareas);
          break;
        case 0:
          console.log('Ha seleccionado volver al menú anterior');
          break;
        default:
          console.log('Ha seleccionado una respuesta no válida, vuelva a intentarlo');
          break;
      }
      break;
    case 2:
      Menu.opcion2();
      const titulo = readline.question('Introduce el título de la tarea: ');
      funciones.buscarTarea(tareas, titulo);
      break;
    case 3:
      console.log('Estás creando una tarea.');
      // Implementa lógica para capturar entrada del usuario para crear una nueva tarea.
      break;
    case 0:
      console.log('Ha salido del programa');
      break;
    default:
      console.log('Ha seleccionado una respuesta no válida, vuelva a intentarlo');
      break;
  }
} while (opcion !== 0);



































































/*const readline = require('readline-sync');
const funciones = require('./funciones');
const Menu = require('./menu');
const tareas = [];

let opcion = 0;
let opcionSubMenus = 0;


do {
  Menu.principal;

  //Falta agregar para ingresar opcion por teclado

  switch (opcion) {
    case 1:
      Menu.opcion1;

      //Falta agregar para ingresar opcion por teclado

      switch (opcionSubMenus) {
        case 1:
          console.log("Estas son todas tus tareas");
          console.log("");
          funciones.mostrarTodasTareas;

          //Falta agregar mensaje en caso de que no haya tareas cargadas, agregar ingresar por teclado y agregar switch de opciones de detalles de tareas

          break;
        case 2:
          console.log("Estas son todas tus tareas pendientes");
          console.log("");
          funciones.mostrarTareasPendientes;

          //Falta agregar mensaje en caso de que no haya tareas cargadas
          break;
        case 3:
          console.log("Estas son todas tus tareas en curso");
          console.log("");
          funciones.mostrarTareasEnCurso;
          //Falta agregar mensaje en caso de que no haya tareas cargadas

          break;
        case 4:
          console.log("Estas son todas tus tareas terminadas");
          console.log("");
          funciones.mostrarTareasTerminadas;
          //Falta agregar mensaje en caso de que no haya tareas cargadas

          break;
        case 0:
          console.log("Ha seleccionado volver al menu anterior");
          break;
        default:
          console.log(
            "Ha seleccionado una respuesta no valida, vuelva a intentarlo"
          );
          break;
      }
      break;
    case 2:
      Menu.opcion2;

      funciones.buscarTarea(tareas, titulo);

      break;
    case 3:
      console.log(`Estas creando una tarea.\n\n`);
      console.log("1. Ingresa el titulo: ");
      console.log("2. Ingresa la descripcion: ");
      console.log(`3. Estado (pendiente / en curso / terminada / cancelada): `)
      console.log(`4. Dificultad (facil, medio, dificil)`);
      console.log(`5. Vencimiento: `);




      break;
    case 0:
      console.log("Ha salido del programa");
      break;
    default:
      console.log(
        "Ha seleccionado una respuesta no valida, vuelva a intentarlo"
      );
      break;
  }
} while (opcion != 0);
*/