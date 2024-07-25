document.addEventListener("DOMContentLoaded", (event) => {
  const swiper = new Swiper(".swiper-container", {
    //   direction: 'horizontal',
    //   loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });
});
