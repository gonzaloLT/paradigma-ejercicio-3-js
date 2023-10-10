function crearTarea(titulo) {
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

module.exports = {
  crearTarea,
  mostrarTodasTareas,
  mostrarTareasPendientes,
  mostrarTareasEnCurso,
  mostrarTareasTerminadas,
  buscarTarea,
  cambiarEstado,
};
