// FUNCTION / historia --------->
function switchTexto() {
const historia = document.getElementById("historia");
const headingHistoria = document.getElementById("heading-historia");
const introHistoria = document.getElementById("intro-historia");
const textoHistoria = document.getElementById("texto-historia");
const btnHistoria = document.getElementById("btn-historia");

if(introHistoria.classList.contains("block")) {
  historia.classList.remove("laptop:col-span-2");
  historia.classList.add("laptop:col-span-4");
  headingHistoria.classList.remove("bg-neutral-500",);
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
  headingHistoria.classList.add("bg-neutral-500");
  introHistoria.classList.remove("hidden");
  introHistoria.classList.add("block");
  textoHistoria.classList.remove("block");
  textoHistoria.classList.add("hidden");
  btnHistoria.innerHTML = "leer más";
};
};

// FUNCTION / mision ---------->
function switchMision() {
  const mision = document.getElementById("mision");
  const headingMision = document.getElementById("heading-mision");
  const introMision = document.getElementById("intro-mision");
  const textoMision = document.getElementById("texto-mision");
  const btnMision = document.getElementById("btn-mision");
  
  if(introMision.classList.contains("block")) {
    mision.classList.remove("laptop:col-span-2");
    mision.classList.add("laptop:col-span-4");
    headingMision.classList.remove("bg-neutral-500",);
    headingMision.classList.add("bg-azulAgroClaro");
    introMision.classList.remove("block");
    introMision.classList.add("hidden");
    textoMision.classList.remove("hidden");
    textoMision.classList.add("block");
    btnMision.innerHTML = "leer menos";
  } else {
    mision.classList.remove("laptop:col-span-4");
    mision.classList.add("laptop:col-span-2");
    headingMision.classList.remove("bg-azulAgroClaro");
    headingMision.classList.add("bg-neutral-500");
    introMision.classList.remove("hidden");
    introMision.classList.add("block");
    textoMision.classList.remove("block");
    textoMision.classList.add("hidden");
    btnMision.innerHTML = "leer más";
  };
  };

// FUNCTION / vision ---------->
  function switchVision() {
    const vision = document.getElementById("vision");
    const headingVision = document.getElementById("heading-vision");
    const introVision = document.getElementById("intro-vision");
    const textoVision = document.getElementById("texto-vision");
    const btnVision = document.getElementById("btn-vision");
    
    if(introVision.classList.contains("block")) {
      vision.classList.remove("laptop:col-span-2");
      vision.classList.add("laptop:col-span-4");
      headingVision.classList.remove("bg-neutral-500",);
      headingVision.classList.add("bg-azulAgroClaro");
      introVision.classList.remove("block");
      introVision.classList.add("hidden");
      textoVision.classList.remove("hidden");
      textoVision.classList.add("block");
      btnVision.innerHTML = "leer menos";
    } else {
      vision.classList.remove("laptop:col-span-4");
      vision.classList.add("laptop:col-span-2");
      headingVision.classList.remove("bg-azulAgroClaro");
      headingVision.classList.add("bg-neutral-500");
      introVision.classList.remove("hidden");
      introVision.classList.add("block");
      textoVision.classList.remove("block");
      textoVision.classList.add("hidden");
      btnVision.innerHTML = "leer más";
    };
    };

    // FUNCTION / valores ---------->
  function switchValores() {
    const valores = document.getElementById("valores");
    const headingValores = document.getElementById("heading-valores");
    const introValores = document.getElementById("intro-valores");
    const textoValores = document.getElementById("texto-valores");
    const btnValores = document.getElementById("btn-valores");
    
    if(introValores.classList.contains("block")) {
      valores.classList.remove("laptop:col-span-2");
      valores.classList.add("laptop:col-span-4");
      headingValores.classList.remove("bg-neutral-500",);
      headingValores.classList.add("bg-azulAgroClaro");
      introValores.classList.remove("block");
      introValores.classList.add("hidden");
      textoValores.classList.remove("hidden");
      textoValores.classList.add("block");
      btnValores.innerHTML = "leer menos";
    } else {
      valores.classList.remove("laptop:col-span-4");
      valores.classList.add("laptop:col-span-2");
      headingValores.classList.remove("bg-azulAgroClaro");
      headingValores.classList.add("bg-neutral-500");
      introValores.classList.remove("hidden");
      introValores.classList.add("block");
      textoValores.classList.remove("block");
      textoValores.classList.add("hidden");
      btnValores.innerHTML = "leer más";
    };
    };