// FUNCTIONS --------->
// function switchTexto() {
//   let puntos = document.getElementById("puntos");
//   let masTexto = document.getElementById("mas");
//   let leerMas = document.getElementById("leer-mas");

//   if (puntos.classList.contains("hidden")) {
//       // Mostrar puntos suspensivos
//       puntos.classList.remove("hidden");
//       // Esconder más texto
//       masTexto.classList.add("hidden");
//       // cambiar texto botón
//       leerMas.innerHTML = "leer más";
//   } else {
//       // Esconder los puntos
//       puntos.classList.add("hidden");
//       // Esconder más texto
//       masTexto.classList.remove("hidden");
//       // cambiar texto botón
//       leerMas.innerHTML = "leer menos";
//   }
// }

function switchTexto() {
const historia = "Inició hace 18 años, como una pequeña comercializadora que vendía agroquímicos y semillas. Hoy en día seguimos vendiendo agroquímicos y semillas, pero también fertilizantes, equipos de aplicación, equipos de riego y más. Ese “más” es el valor agregado que brindamos a través del mejor servicio al cliente, con soluciones integrales y una cultura de trabajo que nos permita generar relaciones de confianza a largo plazo."

document.getElementById("mas").innerHTML = historia;
};