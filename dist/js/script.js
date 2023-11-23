/* SLIDER */
document.addEventListener("DOMContentLoaded", () => {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 4,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    loop: true,
    // centeredSlides: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 4,
    slidesPerView: 1,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  // galleryTop.controller.control = galleryThumbs;
  // galleryThumbs.controller.control = galleryTop;
});

/* ACCORDION */

const buttonAccordion = [...document.querySelectorAll(".accordion-title-box")];

buttonAccordion.map((el) => {
  el.addEventListener("click", () => {
    const text = el.nextElementSibling;
    const arrow = el.querySelector(".accordion-arrow");

    if (text.classList.contains("accordion-text-visible")) {
      text.classList.remove("accordion-text-visible");
      arrow.classList.remove("accordion-arrow_active");
    } else {
      text.classList.add("accordion-text-visible");
      arrow.classList.add("accordion-arrow_active");
    }
  });
});
