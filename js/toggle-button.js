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
const headingHistoria = document.getElementById("heading-historia");
const introHistoria = document.getElementById("intro-historia");
const textoHistoria = document.getElementById("texto-historia");
const btnHistoria = document.getElementById("btn-historia");

if(introHistoria.classList.contains("block")) {
  historia.classList.remove("laptop:col-span-2");
  historia.classList.add("laptop:col-span-4");
  headingHistoria.classList.remove("bg-neutral-400",);
  headingHistoria.classList.add("bg-azulAgroClaro");
  introHistoria.classList.remove("block");
  introHistoria.classList.add("hidden");
  textoHistoria.classList.remove("hidden");
  textoHistoria.classList.add("block");
  btnHistoria.innerHTML = "leer menos";
} else {
  historia.classList.remove("laptop:col-span-4");
  historia.classList.add("laptop:col-span-2");
  headingHistoria.classList.remove("bg-azulAgroClaro");
  headingHistoria.classList.add("bg-neutral-400");
  introHistoria.classList.remove("hidden");
  introHistoria.classList.add("block");
  textoHistoria.classList.remove("block");
  textoHistoria.classList.add("hidden");
  btnHistoria.innerHTML = "leer más";
};
};