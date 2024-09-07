document.addEventListener('DOMContentLoaded', () => {
    // Image slider logic for automatic transition
    const slides = document.querySelectorAll('.image-slider .slide');
    let currentSlide = 0;
    let slideInterval = setInterval(nextSlide, 3000); // Change image every 3 seconds

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
});
