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
  const modalEl = document.getElementById("js-modal");
  
  if(modalEl){
    const closeModalFormButtonEl = document.getElementById("js-close-modal-form-button");
    const closeModalButtonEl = document.getElementById("js-close-modal-button");
    const openModalButtonEl = document.getElementById("js-open-modal-button");

    function closeModal(){
      documentOverflowAuto();
      modalEl.classList.remove("modal--visible");
    }
    function openModal(){
      documentOverflowHidden();
      modalEl.classList.add("modal--visible");
    }

    document.addEventListener("keydown", (event) => {
      if(event.key === "Escape" || event.keyCode === 27) closeModal();
    });

    modalEl.addEventListener("click", (event) => {
      if(event.target === event.currentTarget) closeModal();
    });

    if(closeModalFormButtonEl) closeModalFormButtonEl.addEventListener("click", closeModal);
    if(closeModalButtonEl) closeModalButtonEl.addEventListener("click", closeModal);
    if(openModalButtonEl) openModalButtonEl.addEventListener("click", openModal);
  }

  // navbar
  const navbar = document.getElementById("js-header-nav");
  const burgerButton = document.getElementById("js-burger-button");
  
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

  navbar.addEventListener("click", (event) => {
    if(navbarIsOpened && event.target !== event.currentTarget) closeNavbar();
  });
  
  burgerButton.addEventListener("click", () => {
    if(navbarIsOpened === false) openNavbar();
    else closeNavbar();
  });

  // swiper
  const swipers = document.querySelectorAll(".js-swiper");
  console.log(swipers)
  swipers.forEach(function (swpr) {
    new Swiper(swpr, {
      updateOnWindowResize: true,
      slidesPerView: "auto",
      freeMode: true,
      spaceBetween: 0,
      speed: 500,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-arrow-next",
        prevEl: ".swiper-arrow-prev",
        disabledClass: "button-disabled",
      },
    });
  });
})();