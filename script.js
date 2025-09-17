const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-slide");
const nextBtn = document.querySelector(".next-slide");
const dotsContainer = document.querySelector(".slider-dots");
const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

let currentIndex = 0;
let slideInterval;

// Create dots
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  if (i === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".slider-dots span");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
  });
  slides[index].classList.add("active");
  dots[index].classList.add("active");
  currentIndex = index;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

function startSlideShow() {
  slideInterval = setInterval(nextSlide, 5000); // auto change every 5s
}

function stopSlideShow() {
  clearInterval(slideInterval);
}

nextBtn.addEventListener("click", () => {
  stopSlideShow();
  nextSlide();
  startSlideShow();
});

prevBtn.addEventListener("click", () => {
  stopSlideShow();
  prevSlide();
  startSlideShow();
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    stopSlideShow();
    showSlide(i);
    startSlideShow();
  });
});

// Init
showSlide(currentIndex);
startSlideShow();