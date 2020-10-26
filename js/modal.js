const modalButton = document.querySelector(".modal-button");
const modalWrapper = document.querySelector(".modal-wrapper");
const modalPopup = document.querySelector(".modal");
const searchForm = modalPopup.querySelector(".hotel-search-form");
const arrivalDate = modalPopup.querySelector(".arrival-date");
const leavingDate = modalPopup.querySelector(".leaving-date");
const adultsNumber = modalPopup.querySelector(".adults-number");
const childrenNumber = modalPopup.querySelector(".children-number");

let isStorageSupport = true;
let storageAdults = "";
let storageChildren = "";

try {
  storageAdults = localStorage.getItem("adults");
  storageChildren = localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}

document.addEventListener("DOMContentLoaded", function() {
  modalPopup.classList.remove("modal-show");
  modalPopup.classList.add("modal-close");
});

modalButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (modalPopup.classList.contains("modal-close")) {
    modalPopup.classList.remove("modal-close");
    modalPopup.classList.add("modal-show");

    arrivalDate.focus({preventScroll:true});
  } else {
    modalPopup.classList.remove("modal-show");
    modalPopup.classList.add("modal-close");
  }

  if (storageAdults && storageChildren) {
    storageAdults.value = storageAdults;
    storageChildren.value = storageChildren;
  }
});

searchForm.addEventListener("submit", function (evt) {
  if (!arrivalDate.value || !leavingDate.value || !adultsNumber.value || !childrenNumber.value) {
    evt.preventDefault();
    modalWrapper.classList.remove("modal-error");
    modalWrapper.offsetWidth = modalWrapper.offsetWidth;
    modalWrapper.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      storageAdults.setItem("adults", adultsNumber.value);
      storageChildren.setItem("children", childrenNumber.value);
   }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      modalPopup.classList.remove("modal-show");
      modalPopup.classList.add("modal-close");
    }
  }
});
