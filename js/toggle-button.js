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
const historia = document.getElementById("historia");
const textoRestante = document.getElementById("textoRestante");
const heading = document.getElementById("headingHistoria");
const leerMas = document.getElementById("leer-mas");

if(parrafo.classList.contains("block")) {
  historia.classList.add("laptop:col-span-4","duration-300")
  historia.classList.remove("laptop:col-span-2")
  parrafo.classList.remove("block");
  textoRestante.classList.remove("hidden");
  textoRestante.classList.add("block");
  heading.classList.add("laptop:bg-azulAgroClaro","laptop:pb-2","duration-200");
  heading.classList.remove("laptop:bg-offWhite","laptop:pb-0");
  leerMas.innerHTML = "leer menos";
} else {
  historia.classList.remove("laptop:col-span-4","duration-300")
  historia.classList.add("laptop:col-span-2")
  parrafo.classList.add("block");
  textoRestante.classList.add("hidden");
  textoRestante.classList.remove("block");
  heading.classList.remove("laptop:bg-azulAgroClaro","laptop:pb-2","duration-200");
  heading.classList.add("laptop:bg-offWhite","laptop:pb-0","duration-200");
  leerMas.innerHTML = "leer más";
};

};