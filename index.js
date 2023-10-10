const readline = require("readline-sync");
const funciones = require("./funciones");
const Menu = require("./menu");
const tareas = [];

let titulo, descripcion, estado, dificultad, vencimientoTexto;
let vencimiento;
let opcion = 0;
let opcionSubMenus = 0;
let indiceTarea = 0;
let editar;
const tareasPendientes = [];
//Carga de prueba
funciones.crearTarea("Aprender HTML", tareas);
funciones.crearTarea("Aprender CSS", tareas);
funciones.crearTarea("Aprender Javascript", tareas);

do {
  Menu.principal();
  opcion = readline.questionInt("Seleccione una opcion: ");

  switch (opcion) {
    case 1:
      Menu.opcion1();
      opcionSubMenus = readline.questionInt("Seleccione una opcion: ");

      switch (opcionSubMenus) {
        case 1:
          if (tareas.length === 0) {
            console.log("No tiene tareas ingresadas");
          } else {
            console.log("Estas son todas tus tareas");
            funciones.mostrarTodasTareas(tareas);
            funciones.detalles(tareas);
            editar = readline.question(
              "Si deseas editarla presiona E, sino cualquier tecla para volver: "
            );
            if (editar.toLowerCase() === "e") {
              funciones.editarTarea(tareas, indiceTarea);
            }
          }
          break;
        case 2:
          funciones.mostrarTareasPendientes(tareas);
          break;
        case 3:
          console.log("Estas son todas tus tareas en curso");
          funciones.mostrarTareasEnCurso(tareas);
          break;
        case 4:
          console.log("Estas son todas tus tareas terminadas");
          funciones.mostrarTareasTerminadas(tareas);
          break;
        case 0:
          console.log("Ha seleccionado volver al menú anterior");
          break;
        default:
          console.log("Ha seleccionado una respuesta no válida");
          break;
      }
      break;
    case 2:
      titulo = readline.question("Introduce el titulo de la tarea a buscar: ");
      funciones.buscarTarea(tareas, titulo);
      break;
    case 3:
      console.log("Estás creando una nueva tarea.");
      titulo = readline.question("1. Ingresa el titulo: ");
      funciones.crearTarea(titulo, tareas);
      descripcion = readline.question("2. Ingresa la descripcion: ");
      tareas[tareas.length - 1].descripcion = descripcion;
      estado = readline.question(
        "3. Estado (pendiente / en curso / terminada / cancelada): "
      );
      tareas[tareas.length - 1].estado = estado;
      dificultad = readline.question(
        "4. Dificultad (facil / medio / dificil): "
      );
      tareas[tareas.length - 1].dificultad = dificultad;
      vencimientoTexto = readline.question("5. Vencimiento (YYYY/MM/DD): ");
      vencimiento = new Date(vencimientoTexto);
      if (!isNaN(vencimiento.getTime())) {
        tareas[tareas.length - 1].fechaVencimiento = vencimiento;
      } else {
        console.log("El formato no es correcto, la fecha no se cargo");
      }
    case 0:
      console.log("Ha salido del programa");
      break;
    default:
      console.log(
        "Ha seleccionado una respuesta no válida, vuelva a intentarlo"
      );
      break;
  }
} while (opcion !== 0);
