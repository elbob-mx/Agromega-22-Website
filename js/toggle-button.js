function switchTexto() {
  var puntos = document.getElementById("puntos");
  var masTexto = document.getElementById("mas");
  var leerMas = document.getElementById("leer-mas");

  if (puntos.classList.contains("hidden")) {
      // Mostrar puntos suspensivos
      puntos.classList.remove("hidden");

      // Esconder más texto
      masTexto.classList.add("hidden");

      // cambiar texto botón
      leerMas.innerHTML = "leer más";
  } else {
      // Esconder los puntos
      puntos.classList.add("hidden");

      // Esconder más texto
      masTexto.classList.remove("hidden");

      // cambiar texto botón
      leerMas.innerHTML = "leer menos";
  }
}