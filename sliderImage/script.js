// Get the necessary elements
var sliderContainer = document.getElementById('sliderContainer');
var slides = document.getElementsByClassName('slide');
var nextBtn = document.querySelector('.nextBtn');
var prevBtn = document.querySelector('.prevBtn');

var currentSlide = 0;
console.log(slides[currentSlide]);

// Show the initial slide
slides[currentSlide].style.display = 'block';

// Function to hide all slides
function hideSlides() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
}

// Function to show the current slide
function showSlide() {
  slides[currentSlide].style.display = 'block';
}

// Function to display the next slide
function nextSlide() {
  hideSlides();
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide();
}

// Function to display the previous slide
function prevSlide() {
  hideSlides();
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide();
}

// Add event listeners to the buttons
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
