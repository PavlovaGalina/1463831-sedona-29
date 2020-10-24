const modalButton = document.querySelector(".modal-button");
const modalPopup = document.querySelector(".modal");
const searchForm = modalPopup.querySelector(".hotel-search-form");
const arrivalDate = modalPopup.querySelector(".arrival-date");
const leavingDate = modalPopup.querySelector(".leaving-date");
const adultsNumber = modalPopup.querySelector(".adults-number");
const childrenNumber = modalPopup.querySelector(".children-number");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

modalButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPopup.classList.toggle("modal-show");
  modalPopup.classList.toggle("modal-close");
});

searchForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
});

searchForm.addEventListener("submit", function (evt) {
  if (!arrivalDate.value || !leavingDate.value || !adultsNumber.value || !childrenNumber.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
    localStorage.setItem("adults", adultsNumber.value);
    localStorage.setItem("children", childrenNumber.value);
   }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (loginPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      loginPopup.classList.remove("modal-show");
    }
  }
});
