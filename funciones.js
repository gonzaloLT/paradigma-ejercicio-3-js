const readline = require('readline-sync');

function crearTarea(titulo, tareas) {
  const tarea = {
    titulo: titulo,
    estado: "pendiente",
    descripcion: "",
    fechaCreacion: Date(),
    dificultad: "facil",
    fechaVencimiento: null,
  };

  tareas.push(tarea);
}

function mostrarTodasTareas(tareas) {
  tareas.forEach((tarea, index) => {
    console.log(`[${index + 1}] ${tarea.titulo}`);
  });
}

function mostrarTareasPendientes(tareas) {
  const tareasPendientes = tareas.filter(
    (tarea) => tarea.estado.toLowerCase() === "pendiente"
  );
  tareasPendientes.forEach((tarea, index) => {
    console.log(`[${index + 1}] ${tarea.titulo}`);
  });
}

function mostrarTareasEnCurso(tareas) {
  const tareasEnCurso = tareas.filter(
    (tarea) => tarea.estado.toLowerCase() === "en curso"
  );
  tareasEnCurso.forEach((tarea, index) => {
    console.log(`[${index + 1}] ${tarea.titulo}`);
  });
}

function mostrarTareasTerminadas(tareas) {
  const tareasTerminadas = tareas.filter(
    (tarea) => tarea.estado.toLowerCase() === "terminada"
  );
  tareasTerminadas.forEach((tarea, index) => {
    console.log(`[${index + 1}] ${tarea.titulo}`);
  });
}

function buscarTarea(tareas, titulo) {
  const tareaBuscada = tareas.filter(
    (tarea) => tarea.titulo.toLowerCase() === titulo
  );
  if (tareaBuscada.length === 0) {
    console.log("No hay tareas relacionadas con la busqueda");
  } else {
    tareaBuscada.forEach((tarea, index) =>
      console.log(
        `Titulo: ${tarea.titulo}\nDescripcion: ${tarea.descripcion}\nEstado: ${tarea.estado}\nFecha de creacion: ${tarea.fechaCreacion}\nFecha de vencimiento: ${tarea.fechaVencimiento}\nDificultad: ${tarea.dificultad}\n\n\n`
      )
    );
  }
}

function cambiarEstado(tarea, nuevoEstado) {
  //Falta agregar controlador en caso de no encontrar
  for (let i = 0; i < tareas.length; i++) {
    if (tareas[i].titulo === tarea) {
      tareas[i].estado = nuevoEstado;
    }
  }
}

function toString(tarea){
  console.log(`Titulo: ${tarea.titulo}\nDescripcion: ${tarea.descripcion}\nEstado: ${tarea.estado}\nFecha de creacion: ${tarea.fechaCreacion}\nFecha de vencimiento: ${tarea.fechaVencimiento}\nDificultad: ${tarea.dificultad}\n\n\n`) ;
}


function editarTarea(tarea, indice){
  console.log(`Estas editando la tarea ${tarea[indice].titulo}`);
  console.log("-Si deseas mantener los valores del atributo simplemente dejalo en blanco.");
  console.log("-Si deseas dejar en blanco un atributo deja un espacio");
  const descripcion = readline.question("1. Ingresa la descripcion: ");
  const estado = readline.question("2. Ingresa el estado (Pendiente / En curso / Terminada / Cancelada): ");
  const dificultad = readline.question("3. Ingresa la dificultad (Facil / Medio / Dificil): ");
  const vencimiento = readline.question("4. Vencimiento: ");

  if(descripcion !== ""){
    tarea[indice].descripcion = descripcion.toLowerCase();
  }
  if(estado !== ""){
    tarea[indice].estado = estado.toLowerCase();
  }
  if(dificultad !== ""){
    tarea[indice].dificultad = dificultad.toLowerCase();
  }
  if(vencimiento !== ""){
    tarea[indice].vencimiento = vencimiento;
  }

}

module.exports = {
  crearTarea,
  mostrarTodasTareas,
  mostrarTareasPendientes,
  mostrarTareasEnCurso,
  mostrarTareasTerminadas,
  buscarTarea,
  cambiarEstado,
  toString,
  editarTarea
};
