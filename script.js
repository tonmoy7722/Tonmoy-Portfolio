document.addEventListener('DOMContentLoaded', () => {
  // Image slider
  const slides = document.querySelectorAll('.image-slider .slide');
  let currentSlide = 0;

  function nextSlide() {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
  }

  setInterval(nextSlide, 3000); // Change image every 3 seconds

  // Moving logo text animation
  const logo = document.getElementById('moving-logo');
  let direction = 1;
  let position = 0;

  function moveLogo() {
      position += direction;
      logo.style.transform = `translateX(${position}px)`;
      
      if (position > 100 || position < 0) { // Change 100 to the desired distance
          direction *= -1;
      }
  }

  setInterval(moveLogo, 10); // Adjust the interval for smoother or faster animation
});

