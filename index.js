//Lista donde se van a almacenar las tareas
const tareas = [];

//VARIABLES
let opcion = 0;
let opcionSubMenus= 0;
//Funcion para crear una tarea y agregarla a la lista
//Falta para agregar fecha de vencimiento
function crearTarea(titulo, descripcion, dificultad){
    const tarea = {
        titulo: titulo,
        estado: "pendiente",
        descripcion: descripcion || " ",
        fechaCreacion: Date(),
        dificultad: dificultad || "facil",
        fechaVencimiento: null,
    }

    tareas.push(tarea);
}

//Funcion para cambiar el estado de una tarea
function cambiarEstado(tarea, nuevoEstado){
    //Falta agregar controlador en caso de no encontrar
    for(let i=0; i < tareas.length; i++){
        if (tareas[i].titulo === tarea){
            tareas[i].estado = nuevoEstado;
        }
    }
}

//Funcion para mostrar tarea
function mostrarTarea(tarea){
    console.log("Titulo:", tarea.titulo);
    console.log("Estado: ", tarea.estado);
    console.log("Descripcion: ", tarea.descripcion);
    console.log("Fecha de creacion: ", tarea.fechaCreacion);
    console.log("Dificultad: ", tarea.dificultad);
    console.log("Fecha de vencimiento: ", tarea.fechaVencimiento);
    console.log("______________________________________");
    console.log("");
}

//Funcion para buscar tarea
function buscarTarea(tarea){
    let bandera=0;
    for(let i=0; i<tareas.length; i++){
        if (tareas[i].titulo===tarea){
            mostrarTarea(tareas[i]);
            bandera=1;
        }
    }
    if(bandera!=1){
        console.log("");
        console.log("No se encontro una tarea con ese nombre");
    }
}



//Prueba
//crearTarea("Comprar", "ropa para mi novia", "dificil");
//crearTarea("Lavar", "lavar auto");
//console.log();


do{
    console.log("Bienvenido");
    console.log("");
    console.log("Que deseas hacer?");
    console.log("");
    console.log("[1] Ver mis tareas");
    console.log("[2] Buscar una tarea");
    console.log("[3] Agregar una tarea");
    console.log("[0] Salir");

    

    //Falta agregar para ingresar opcion por teclado

    switch(opcion){
        case 1://Menu de ver mis tareas
            console.log("Seleccionaste ver mis tareas");
            console.log("");
            console.log("Que tareas deseas ver?");
            console.log("");
            console.log("[1] Todas");
            console.log("[2] Pendientes");
            console.log("[3] En curso");
            console.log("[4] Completadas");
            console.log("[0] Volver");

            //Falta agregar para ingresar opcion por teclado

            switch(opcionSubMenus){
                case 1://Mostrar todas las tareas
                    console.log("Selecciono mostrar todas las tareas");
                    console.log("");
                    for(let i=0; i<tareas.length; i++){
                        mostrarTarea(tareas[i]);
                    }

                    //Falta agregar mensaje en caso de que no haya tareas cargadas
                    opcion =0;
                    break;
                case 2://Mostrar todas las tareas pendientes
                    console.log("Selecciono mostrar todas las tareas pendientes");
                    console.log("");
                    for(let i=0; i<tareas.length; i++){
                        if(tareas[i].estado === "Pendiente" || tareas[i].estado === "pendiente" ){
                            mostrarTarea(tareas[i]);
                        }
                    }

                    
                    //Falta agregar mensaje en caso de que no haya tareas cargadas
                    break;
                case 3://Mostrar todas las tareas en curso
                    console.log("Selecciono mostrar todas las tareas en curso");
                    console.log("");
                    for(let i=0; i<tareas.length; i++){
                        if(tareas[i].estado === "En curso" || tareas[i].estado === "en curso" ){
                            mostrarTarea(tareas[i]);
                        }
                    }
                    //Falta agregar mensaje en caso de que no haya tareas cargadas

                    break;
                case 4://Mostrar todas las tareas terminadas
                    console.log("Selecciono mostrar todas las tareas pendientes");
                    console.log("");
                    for(let i=0; i<tareas.length; i++){
                        if(tareas[i].estado === "Pendiente" || tareas[i].estado === "pendiente" ){
                            mostrarTarea(tareas[i]);
                        }
                    }
                    //Falta agregar mensaje en caso de que no haya tareas cargadas

                    break;
                case 0:
                    console.log("Ha seleccionado volver al menu anterior");
                    break;
                default:
                    console.log("Ha seleccionado una respuesta no valida, vuelva a intentarlo");
                    break;
            }
            break;
        case 2:
            //Menu de buscar una tarea
            console.log("Selecciono buscar una tarea");
            console.log("");
            console.log("Ingrese el titulo de la tarea que desea buscar");
            console.log("");
            let tareaABuscar;
            //Falta poner para ingresar nombre por teclado

            buscarTarea(tareaABuscar);


            break;
        case 3:
            //Menu de agregar una tarea
            console.log("Ha selecionado agregar una tarea");
            console.log("");
            
            console.log("Ingrese el titulo de su tarea");
            console.log("");
            let titulo;

            console.log("Ingrese la descripcion de su tarea (o dejelo vacio)");
            console.log("");
            let descripcion;

            console.log("Ingrese la dificultad de su tarea(Facil, Medio o Dificil)");
            console.log("");
            let dificultad;

            //Falta agregar ingresar por teclado titulo, descripcion y dificultad

            crearTarea(titulo, descripcion, dificultad);

            break;
        case 0:
            console.log("Ha salido del programa");
            break;
        default:
            console.log("Ha seleccionado una respuesta no valida, vuelva a intentarlo");
            break;
    }

}while(opcion!=0);