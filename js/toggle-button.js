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

function switchTexto(button) {
const historia = document.getElementById("historia");
const heading = document.getElementById("heading-historia");
const textoHistoria = document.getElementById("texto-historia");
const intro = document.getElementById("intro");
const textoRestante = document.getElementById("textoRestante");
const leerMas = document.getElementById("leer-mas");

if(intro.classList.contains("block")) {
  historia.classList.remove("laptop:col-span-2");
  historia.classList.add("laptop:col-span-4","duration-300");
  heading.classList.remove("laptop:bg-offWhite","laptop:pb-0","laptop:text-neutral-700");
  heading.classList.add("laptop:bg-azulAgroClaro","laptop:pb-2","laptop:text-offWhite","duration-300","small:bg-neutral-600");
  intro.classList.remove("block");
  intro.classList.add("hidden","duration-300");
  textoRestante.classList.remove("hidden","laptop:px-0");
  textoRestante.classList.add("block","laptop:px-10","duration-300");
  leerMas.innerHTML = "leer menos";
} else {
  historia.classList.remove("laptop:col-span-4");
  historia.classList.add("laptop:col-span-2");
  heading.classList.remove("laptop:bg-azulAgroClaro","laptop:pb-2","laptop:text-offWhite");
  heading.classList.add("laptop:bg-offWhite","laptop:pb-0","laptop:text-neutral-700");
  intro.classList.remove("hidden");
  intro.classList.add("block");
  textoRestante.classList.remove("block","laptop:px-10");
  textoRestante.classList.add("hidden","laptop:px-0");
  leerMas.innerHTML = "leer más";
};
};