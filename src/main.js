// Auto Slide for DaisyUI Carousel

let currentSlide = 1;
const totalSlides = 4;

function autoSlide() {
  currentSlide++;

  if (currentSlide > totalSlides) {
    currentSlide = 1;
  }

  // Slide chnage
  window.location.hash = "#slide" + currentSlide;
}

// slide chnage every 3 sec
setInterval(autoSlide, 3000);
