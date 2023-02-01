// OBTENER MODAL POR ID
var modal = document.getElementById("modal");

// OBTENER IMAGEN MODAL POR ID
  var modalImg = document.getElmentById("modal-img");

// FUNCION LLAMADA AL HACER CLICK EN IMAGEN
function showModal(src) {
  modal.classList.remove("hidden");
  modalImg.src = src;
};

// FUNCION LLAMADA AL HACER CLICK EN 'cerrar'
function closeModal() {
  modal.classList.add("hidden");
};