const readline = require("readline-sync");
const funciones = require("./funciones");
const Menu = require("./menu");
const tareas = [];

let titulo, 
  descripcion, 
  vencimientoTexto,
  vencimiento,
  opcion = 0,
  opcionSubMenus = 0,
  indiceTarea = 0,
  editar, 
  validarEditar,
  seguir;

do {
  console.clear();

  Menu.principal();
  opcion = readline.questionInt("Seleccione una opcion: ");

  switch (opcion) {
    case 1:
      Menu.opcion1();
      opcionSubMenus = readline.questionInt("Seleccione una opcion: ");

      switch (opcionSubMenus) {
        case 1:
          console.clear();
          if (tareas.length === 0) {
            console.log("No tiene tareas ingresadas");
          } else {
            
            // Preguntar por el orden deseado
            const orden = readline.question(
              "Selecciona el orden de visualizacion (1: Alfabetico ascendente, 2: Fecha de vencimiento ascendente, 3: Fecha de creacion ascendente): "
              );
            console.clear();
            funciones.mostrarTodasTareas(tareas, orden);
            validarEditar = funciones.detalles(tareas);

            if(validarEditar === "f"){
              break;
            } else {
              editar = readline.question(
                "Si deseas editarla presiona E, sino cualquier tecla para volver: "
              );
              if (editar.toLowerCase() === "e") {
                funciones.editarTarea(tareas, indiceTarea);
              }
            }
          }
          seguir = readline.question("Presione enter para continuar");
          break;
        case 2:
          console.clear();
          funciones.mostrarTareasPendientes(tareas);
          seguir = readline.question("Presione enter para continuar");
          break;
        case 3:
          console.clear();
          
          funciones.mostrarTareasEnCurso(tareas);
          seguir = readline.question("Presione enter para continuar");
          break;
        case 4:
          console.clear();
          funciones.mostrarTareasTerminadas(tareas);
          seguir = readline.question("Presione enter para continuar");
          break;
        case 5:
          console.clear();
          funciones.mostrarTareasCanceladas(tareas);
          seguir = readline.question("Presione enter para continuar");
          break;
        case 0:
          console.log("Ha seleccionado volver al menu anterior");
          break;
        default:
          console.log("Ha seleccionado una respuesta no valida");
          break;
      }
      break;
    case 2:
      console.clear();
      funciones.buscarTarea(tareas);
      seguir = readline.question("Presione enter para continuar");
      break;
    case 3:
      console.clear();
      console.log("Estás creando una nueva tarea.");

      // Solicitar y validar el título
      titulo = readline.question("1. Ingresa el titulo: ");
      if (!titulo.trim()) {
        console.log("El título no puede estar vacío. Volviendo al menú principal.");
        seguir = readline.question("Presione enter para continuar");
        break;
      }
      
      // Continuar con el proceso de creación de tarea
      funciones.crearTarea(titulo, tareas);
      descripcion = readline.question("2. Ingresa la descripcion: ");
      tareas[tareas.length - 1].descripcion = descripcion;
      
      // Solicitar y validar el estado
      let estadoIngresado = readline.question(
        "3. Estado (P para pendiente, E para en curso, T para terminada, C para cancelada): "
      ).toUpperCase();
      
      switch (estadoIngresado) {
        case "P":
          tareas[tareas.length - 1].estado = "pendiente";
          break;
        case "E":
          tareas[tareas.length - 1].estado = "en curso";
          break;
        case "T":
          tareas[tareas.length - 1].estado = "terminada";
          break;
        case "C":
          tareas[tareas.length - 1].estado = "cancelada";
          break;
        default:
          console.log("Valor no válido, se establecera como pendiente por defecto.");
          tareas[tareas.length - 1].estado = "pendiente";
      }
      
      // Solicitar y validar la dificultad
      let dificultadIngresada = readline.question(
        "4. Dificultad (1 para facil, 2 para medio, 3 para dificil): "
      );
      
      switch (dificultadIngresada) {
        case "1":
          tareas[tareas.length - 1].dificultad = "facil";
          break;
        case "2":
          tareas[tareas.length - 1].dificultad = "medio";
          break;
        case "3":
          tareas[tareas.length - 1].dificultad = "dificil";
          break;
        default:
          console.log("Valor no válido, se establecera como facil por defecto.");
          tareas[tareas.length - 1].dificultad = "facil";
      }
      
      vencimientoTexto = readline.question("5. Vencimiento (YYYY/MM/DD): ");
      vencimiento = new Date(vencimientoTexto);
      if (!isNaN(vencimiento.getTime())) {
        tareas[tareas.length - 1].fechaVencimiento = vencimiento;
      } else {
        console.log("El formato no es correcto, la fecha no se cargo");
      }
      
      seguir = readline.question("Presione enter para continuar");
      break;
    case 0:
      console.log("Ha salido del programa");
      break;
    default:
      console.log("Ha seleccionado una respuesta no valida, vuelva a intentarlo")
        seguir = readline.question("Presione enter para continuar")
      ;
      break;
  }
} while (opcion !== 0);