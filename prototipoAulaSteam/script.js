
/* 
El JavaScript de mi prototipo es el encargado de hacerlo interactivo.
Primero, detecta cuando el usuario hace clic en alguno de los equipos 
del Aula STEAM.
Luego, según el equipo seleccionado, llena automáticamente la ventana 
emergente con el título, la imagen, la descripción 
y el video de YouTube correspondiente.
Finalmente, el JavaScript también controla cuándo se abre y se cierra el modal,
 para que el usuario pueda ver la información y luego ocultarla fácilmente
*/


/* ====================================================
   DESCRIPCIONES DE LOS EQUIPOS STEAM (GALERÍA)
   ==================================================== */

const descripciones = {

  "aula-completa": {
    titulo: "Aula Completa STEAM",
    texto: "Un Aula STEAM integra equipos tecnológicos diseñados para desarrollar competencias en ciencia, tecnología, ingeniería, arte y matemáticas. Permite realizar proyectos colaborativos, programación, prototipado, diseño, investigación y experimentación científica."
  },

  "brazo-robotico": {
    titulo: "Brazo Robótico",
    texto: "Dispositivo mecánico programable que permite aprender robótica, automatización, sensores y lógica de movimiento. Se utiliza para simular procesos industriales, manipulación y control mecánico."
  },

  "camara-documental": {
    titulo: "Cámara Documental",
    texto: "Captura libros, experimentos u objetos en tiempo real y los proyecta al tablero interactivo. Facilita demostraciones, análisis y explicaciones detalladas sin que los estudiantes deban acercarse."
  },

  "impresora3d": {
    titulo: "Impresora 3D",
    texto: "Convierte modelos digitales en objetos físicos. Los estudiantes pueden diseñar piezas, estructuras, prototipos, figuras o componentes mecánicos, desarrollando habilidades en diseño 3D y fabricación."
  },

  "kitsiot": {
    titulo: "Kit IoT",
    texto: "Incluye sensores, actuadores y microcontroladores para crear dispositivos inteligentes. Se usa para construir proyectos como estaciones meteorológicas, alarmas, iluminación automática o sistemas conectados."
  },

  "kitsteam": {
    titulo: "Kit STEAM",
    texto: "Material para actividades prácticas que combinan ciencia, tecnología, ingeniería, arte y matemáticas. Permite construir mecanismos, resolver retos, realizar experimentos y crear proyectos multidisciplinarios."
  },

  "lapizinteractivos": {
    titulo: "Lápices Interactivos",
    texto: "Herramientas digitales que permiten escribir, dibujar o interactuar con pantallas táctiles y tableros interactivos. Facilitan anotaciones rápidas y participación de los estudiantes."
  },

  "laptos": {
    titulo: "Laptops Estudiantiles",
    texto: "Computadores portátiles usados para programación, diseño digital, investigación, robótica, modelado 3D, análisis de datos y uso de plataformas educativas."
  },

  "librosinteractivos": {
    titulo: "Libros Interactivos",
    texto: "Material digital con videos, animaciones, actividades multimedia y simulaciones para reforzar la comprensión y el aprendizaje autónomo."
  },

  "maletadecarga": {
    titulo: "Maleta de Carga",
    texto: "Unidad para almacenar y cargar laptops o tablets de forma segura. Facilita el transporte, organización y disponibilidad de los equipos del aula."
  },

  "mesadocente": {
    titulo: "Mesa Docente",
    texto: "Puesto de trabajo donde el docente controla los dispositivos del aula como el proyector, laptop, tablero interactivo y cámara documental."
  },

  "microscopio": {
    titulo: "Microscopio Digital",
    texto: "Permite observar muestras ampliadas y proyectarlas en la pantalla o tablero interactivo. Ideal para actividades científicas e investigaciones escolares."
  },

  "tablerointeractivo": {
    titulo: "Tablero Interactivo",
    texto: "Pantalla táctil donde se puede escribir, proyectar contenido, manipular objetos digitales y realizar actividades colaborativas con los estudiantes."
  },

  "tumlap": {
    titulo: "Tum Lap",
    texto: "Carro robusto para almacenar y cargar laptops. Garantiza seguridad, organización y movilidad entre aulas."
  },

  "videoproyector": {
    titulo: "Video Proyector",
    texto: "Dispositivo que proyecta imágenes, videos y presentaciones en gran formato para facilitar clases, demostraciones y simulaciones."
  }

};


/* ====================================================
   FUNCIONES MODAL – DESCRIPCIÓN DE EQUIPOS
   ==================================================== */

function abrirDescripcion(id) {
    const modal = document.getElementById("modalDescripcion");
    document.getElementById("tituloEquipo").innerText = descripciones[id].titulo;
    document.getElementById("textoDescripcion").innerText = descripciones[id].texto;
    modal.style.display = "flex";
}

function cerrarDescripcion() {
    document.getElementById("modalDescripcion").style.display = "none";
}


/* ====================================================
   GUÍAS POR GRADO (YA TENÍAS ESTA PARTE Y SE RESPETA)
   ==================================================== */

function verGuia(grado) {
  const titulo = document.getElementById("titulo-guia");
  const objetivo = document.getElementById("objetivo");
  const recursos = document.getElementById("recursos");
  const actividades = document.getElementById("actividades");
  const evaluacion = document.getElementById("evaluacion");
  const popup = document.getElementById("popup-guia");

  const guias = {
    grado2: {
      titulo: "Grado 2° – Introducción a las redes",
      objetivo: "Comprender qué es una red y sus usos.",
      recursos: "Tablero interactivo, laptop, kit i3Cart, video proyector.",
      actividades: "Inicio: diálogo. Desarrollo: red de amigos. Cierre: reflexión.",
      evaluacion: "Observación y participación."
    },
    grado3: {
      titulo: "Grado 3° – Algoritmos en la vida cotidiana",
      objetivo: "Identificar pasos lógicos para resolver tareas.",
      recursos: "Tablero, laptop, objetos cotidianos.",
      actividades: "Receta, pasos detallados, mini algoritmo.",
      evaluacion: "Claridad en la secuencia de pasos."
    },
    grado6: {
      titulo: "Grado 6° – Solución de problemas tecnológicos",
      objetivo: "Aplicar pensamiento computacional.",
      recursos: "Kit LittleBits, reciclaje, tablero interactivo.",
      actividades: "Identificar problema, construir prototipo, exposición.",
      evaluacion: "Creatividad y funcionamiento."
    },
    grado7: {
      titulo: "Grado 7° – Evolución de la tecnología",
      objetivo: "Analizar inventos y su impacto.",
      recursos: "i3Conference, tablero, línea del tiempo.",
      actividades: "Lluvia de ideas, línea del tiempo, debate.",
      evaluacion: "Participación crítica."
    },
    grado8: {
      titulo: "Grado 8° – Sensores y transductores",
      objetivo: "Comprender sensores y su propósito.",
      recursos: "Kits IoT, LittleBits, impresora 3D.",
      actividades: "Identificación, experimentación, mini proyecto.",
      evaluacion: "Resultados y comprensión."
    }
  };

  const data = guias[grado];

  titulo.innerText = data.titulo;
  objetivo.innerText = data.objetivo;
  recursos.innerText = data.recursos;
  actividades.innerText = data.actividades;
  evaluacion.innerText = data.evaluacion;

  popup.style.display = "flex";
}

function cerrarGuia() {
  document.getElementById("popup-guia").style.display = "none";
}
