const modalEl = document.getElementById("modal");
const closeModalFormButtonEl = document.getElementById("close-modal-form-button");
const closeModalButtonEl = document.getElementById("close-modal-button");
const openModalButtonEl = document.getElementById("open-modal-button");
const openModalFooterButtonEl = document.getElementById("open-modal-footer-button");

let modalIsOpen = false;

function closeModal(){
  document.body.style.overflow = "auto";
  modalEl.classList.remove("modal--opened");
  modalIsOpen = false;
}
function openModal(){
  document.body.style.overflow = "hidden";
  modalEl.classList.add("modal--opened");
  modalIsOpen = true;
}

function closeButtonHandler(){
  if(modalIsOpen){
    document.body.style.overflow = "auto";
    modalEl.classList.remove("modal--opened");
  } else{
    document.body.style.overflow = "hidden";
    modalEl.classList.add("modal--opened");
  }

  modalIsOpen = !modalIsOpen;
}

modalEl.onclick = (event) => {
  if(event.target === event.currentTarget) closeModal();
}
if(closeModalFormButtonEl) closeModalFormButtonEl.onclick = closeModal;
if(closeModalButtonEl) closeModalButtonEl.onclick = closeModal;
if(openModalButtonEl) openModalButtonEl.onclick = openModal;
if(openModalFooterButtonEl) openModalFooterButtonEl.onclick = openModal;