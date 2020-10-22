const modalButton = document.querySelector(".modal-button");
const modal = document.querySelector(".modal");
const modalForm = modal.querySelector(".hotel-search-form");

modalButton.addEventListener("click", function () {
  modal.classList.add("modal-show");
});

modalForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
});

@keyframes bounce {
  0% {
    transform: translateY(-2000px);
  }

  70% {
    transform: translateY(30px);
  }

  90% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0);
  }
}
