// GET MODAL BY ID
var modal = document.getElementById("modal");

// GET MODAL IMG BY ID
var modalImg = document.getElementById("modal-img");

// FUNCTION CALLED WHEN IMAGE CLICKED
function showModal(src) {
  modal.classList.remove("hidden");
  modalImg.src = src;
};

// FUNCTION CALLED WHEN 'CLOSE BUTTON ('X')' CLICKED
function closeModal() {
  modal.classList.add("hidden");
};