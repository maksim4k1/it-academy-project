(function(){
  "use strict";

  // document overflow functions
  function documentOverflowAuto(){
    document.documentElement.style.overflow = "auto";
  }
  function documentOverflowHidden(){
    document.documentElement.style.overflow = "hidden";
  }

  // modal
  const modalEl = document.getElementById("modal");
  const closeModalFormButtonEl = document.getElementById("close-modal-form-button");
  const closeModalButtonEl = document.getElementById("close-modal-button");
  const openModalButtonEl = document.getElementById("open-modal-button");
  
  let modalIsOpened = false;
  
  function closeModal(){
    documentOverflowAuto();
    modalEl.classList.remove("modal--visible");
    modalIsOpened = false;
  }
  function openModal(){
    documentOverflowHidden();
    modalEl.classList.add("modal--visible");
    modalIsOpened = true;
  }
  
  if(modalEl){
    modalEl.onclick = (event) => {
      if(event.target === event.currentTarget) closeModal();
    }
  }
  if(closeModalFormButtonEl) closeModalFormButtonEl.onclick = closeModal;
  if(closeModalButtonEl) closeModalButtonEl.onclick = closeModal;
  if(openModalButtonEl) openModalButtonEl.onclick = openModal;

  // navbar
  const navbar = document.querySelector(".page-header__nav");
  const burgerButton = document.getElementById("burger-button");
  
  let navbarIsOpened = false;

  function closeNavbar(){
    documentOverflowAuto();
    navbar.classList.remove("page-header__nav--opened");
    burgerButton.classList.remove("page-header__burger-button--close");
    navbarIsOpened = false;
  }
  function openNavbar(){
    documentOverflowHidden();
    navbar.classList.add("page-header__nav--opened");
    burgerButton.classList.add("page-header__burger-button--close");
    navbarIsOpened = true;
  }

  navbar.onclick = (event) => {
    if(navbarIsOpened && event.target !== event.currentTarget) closeNavbar();
  }
  
  burgerButton.onclick = () => {
    if(navbarIsOpened === false) openNavbar();
    else closeNavbar();
  }
})();