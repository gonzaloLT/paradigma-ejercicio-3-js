const readline = require("readline-sync");

function crearTarea(titulo, tareas) {
  if (!titulo.trim()) {
    console.log("El título no puede estar vacío. La tarea no se sasa.");
    return;
  }
  const tarea = {
    titulo: titulo,
    estado: "pendiente",
    descripcion: "",
    fechaCreacion: new Date(),
    dificultad: "facil",
    fechaVencimiento: null,
  };

  tareas.push(tarea);
}

function mostrarTodasTareas(tareas, orden) {
  switch (orden) {
    case "1":
      console.log("Tus tareas en orden ascendente son: ");
      console.log("-------------------------------");
      tareas.sort((a, b) => a.titulo.localeCompare(b.titulo));
      break;
    case "2":
      console.log("Tus tareas en orden por fecha de vencimiento ascendente son: ");
      console.log("-------------------------------");
      tareas.sort((a, b) => a.fechaVencimiento - b.fechaVencimiento);
      break;
    case "3":
      console.log("Tus tareas en orden por fecha de creacion ascendente son: ");
      console.log("-------------------------------");
      tareas.sort((a, b) => new Date(a.fechaCreacion) - new Date(b.fechaCreacion));
      break;
    default:
      console.log("Opción de orden no válida. Se mostrarán sin orden.");
  }

  tareas.forEach((tarea, index) => {
    const dificultadEmoji = obtenerEmojiDificultad(tarea.dificultad);
    console.log(`[${index + 1}] ${tarea.titulo} - Dificultad: ${dificultadEmoji}`);
  });
}

function mostrarTareasPendientes(tareas) {
  const tareasPendientes = tareas.filter(
    (tarea) => tarea.estado.toLowerCase() === "pendiente"
  );

  if (tareasPendientes.length === 0) {
    console.log("No hay tareas pendientes.");
    return;
  }
  console.log("Estas son todas tus tareas pendientes");
  console.log("-------------------------------");
  tareasPendientes.forEach((tarea, index) => {
    console.log(`[${index + 1}] ${tarea.titulo}`);
  });
}

function mostrarTareasEnCurso(tareas) {
  const tareasEnCurso = tareas.filter(
    (tarea) => tarea.estado.toLowerCase() === "en curso"
  );
  
  if (tareasEnCurso.length === 0) {
    console.log("No hay tareas en curso.");
    return;
  }
  console.log("Estas son todas tus tareas en curso");
  console.log("-------------------------------");
  tareasEnCurso.forEach((tarea, index) => {
    console.log(`[${index + 1}] ${tarea.titulo}`);
  });
}

function mostrarTareasTerminadas(tareas) {
  const tareasTerminadas = tareas.filter(
    (tarea) => tarea.estado.toLowerCase() === "terminada"
  );

  if (tareasTerminadas.length === 0) {
    console.log("No hay tareas terminadas.");
    return;
  }
  console.log("Estas son todas tus tareas terminadas");
  console.log("-------------------------------");
  tareasTerminadas.forEach((tarea, index) => {
    console.log(`[${index + 1}] ${tarea.titulo}`);
  });
}

function mostrarTareasCanceladas(tareas) {
  const tareasCanceladas = tareas.filter(
    (tarea) => tarea.estado.toLowerCase() === "cancelada"
  );

  if (tareasCanceladas.length === 0) {
    console.log("No hay tareas canceladas.");
    return;
  }
  console.log("Estas son todas tus tareas canceladas");
  console.log("-------------------------------");
  tareasCanceladas.forEach((tarea, index) => {
    console.log(`[${index + 1}] ${tarea.titulo}`);
  });
}


function buscarTarea(tareas) {
  const busqueda = readline.question("Introduce el titulo de la tarea a buscar: ").toLowerCase();
  const tareasEncontradas = tareas.filter(tarea => tarea.titulo.toLowerCase().includes(busqueda));
  console.log(`\n\n\n`);
  if (tareasEncontradas.length === 0) {
    console.log(`No se encontraron tareas con el titulo que contiene "${busqueda}".`);
    return;
  }

  console.log(`Tareas encontradas con el titulo que contiene "${busqueda}":`);
  console.log("-------------------------------");

  tareasEncontradas.forEach((tarea, index) => {
    const dificultadEmoji = obtenerEmojiDificultad(tarea.dificultad);
    console.log(`[${index + 1}] ${tarea.titulo} - Dificultad: ${dificultadEmoji}`);
  });

  const opcionDetalle = readline.questionInt("Selecciona el numero de la tarea para ver detalles (0 para volver): ");
  
  if (opcionDetalle > 0 && opcionDetalle <= tareasEncontradas.length) {
    const indiceTarea = opcionDetalle - 1;
    const dificultadenEmoji = obtenerEmojiDificultad(tareasEncontradas[indiceTarea].dificultad);
    console.log(
      `Titulo: ${tareasEncontradas[indiceTarea].titulo}\nDescripcion: ${tareasEncontradas[indiceTarea].descripcion}\nEstado: ${tareasEncontradas[indiceTarea].estado}\nFecha de creacion: ${tareasEncontradas[indiceTarea].fechaCreacion ? tareasEncontradas[indiceTarea].fechaCreacion.toLocaleDateString() : 'Null'}\nFecha de vencimiento: ${tareasEncontradas[indiceTarea].fechaVencimiento ? tareasEncontradas[indiceTarea].fechaVencimiento.toLocaleDateString() : 'Null'}\nDificultad: ${dificultadenEmoji}\n\n\n`
    )
  }
}


function cambiarEstado(tarea, nuevoEstado) {
  for (let i = 0; i < tareas.length; i++) {
    if (tareas[i].titulo === tarea) {
      tareas[i].estado = nuevoEstado;
    }
  }
}

function detalles(tarea) {
  console.log("Deseas ver los detalles de alguna?");
  indiceTarea = readline.questionInt(
    "Introduce el numero para verla o 0 para volver: "
  );
  if (indiceTarea == 0) {
    console.log("Selecciono volver");
    return "f";
  } else {
    indiceTarea--;
    const dificultadenEmoji = obtenerEmojiDificultad(tarea[indiceTarea].dificultad);
    console.log(
      `Titulo: ${tarea[indiceTarea].titulo}\nDescripcion: ${tarea[indiceTarea].descripcion}\nEstado: ${tarea[indiceTarea].estado}\nFecha de creacion: ${tarea[indiceTarea].fechaCreacion ? tarea[indiceTarea].fechaCreacion.toLocaleDateString() : 'Null'}\nFecha de vencimiento: ${tarea[indiceTarea].fechaVencimiento ? tarea[indiceTarea].fechaVencimiento.toLocaleDateString() : 'Null'}\nDificultad: ${dificultadenEmoji}\n\n\n`
    );

    return "a";
  }
}

function editarTarea(tareas, indice) {
  console.log(`Estas editando la tarea ${tareas[indice].titulo}`);
  console.log(
    "- Si deseas mantener los valores del atributo simplemente dejalo en blanco."
  );
  console.log("- Si deseas dejar en blanco un atributo, presiona Enter.");

  // Editar descripción
  const nuevaDescripcion = readline.question("1. Ingresa la descripcion: ");
  if (nuevaDescripcion !== "") {
    tareas[indice].descripcion = nuevaDescripcion;
  }

  // Editar estado con opciones
  let nuevoEstado = readline.question(
    "2. Ingresa el estado (P: Pendiente, E: En curso, T: Terminada, C: Cancelada): "
  ).toUpperCase();

  switch (nuevoEstado) {
    case "P":
      tareas[indice].estado = "pendiente";
      break;
    case "E":
      tareas[indice].estado = "en curso";
      break;
    case "T":
      tareas[indice].estado = "terminada";
      break;
    case "C":
      tareas[indice].estado = "cancelada";
      break;
    default:
      console.log("Valor no valido, se mantendrá el estado actual.");
  }

  // Editar dificultad con opciones
  let nuevaDificultad = readline.question(
    "3. Ingresa la dificultad (1: Facil, 2: Medio, 3: Dificil): "
  );

  switch (nuevaDificultad) {
    case "1":
      tareas[indice].dificultad = "facil";
      break;
    case "2":
      tareas[indice].dificultad = "medio";
      break;
    case "3":
      tareas[indice].dificultad = "dificil";
      break;
    default:
      console.log("Valor no válido, se mantendra la dificultad actual.");
  }

  // Editar vencimiento
  const nuevoVencimiento = readline.question("4. Vencimiento (YYYY/MM/DD): ");
  if (nuevoVencimiento !== "") {
    const vencimiento = new Date(nuevoVencimiento);
    if (!isNaN(vencimiento.getTime())) {
      tareas[indice].fechaVencimiento = vencimiento;
    } else {
      console.log("El formato no es correcto, la fecha no se cambio.");
    }
  }

  // Registrar la última edición
  tareas[indice].ultimaEdicion = new Date();
}

function obtenerEmojiDificultad(dificultad) {
  switch (dificultad.toLowerCase()) {
    case "facil":
      return "★☆☆";
    case "medio":
      return "★★☆";
    case "dificil":
      return "★★★";
    default:
      return "";
  }
}

module.exports = {
  crearTarea,
  mostrarTodasTareas,
  mostrarTareasPendientes,
  mostrarTareasEnCurso,
  mostrarTareasTerminadas,
  mostrarTareasCanceladas,
  buscarTarea,
  cambiarEstado,
  detalles,
  editarTarea,
  obtenerEmojiDificultad,
};