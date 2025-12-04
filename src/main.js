import Swiper from "swiper/bundle";
import "swiper/css/bundle";

// Infinite Loop Slider
new Swiper(".mySwiper", {
  loop: true,
  speed: 600,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
