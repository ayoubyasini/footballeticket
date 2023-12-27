$(document).ready(function () {
  $("#FormSearch").css("display", "none");
  $("#iconSearch").click(function (event) {
    $("#FormSearch").slideToggle(300);
    event.stopPropagation();
  });

});

const swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
