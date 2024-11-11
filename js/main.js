(function () {
    "use strict";


    const navToggle = document.querySelector('.nav-toggle');
    const headerNavContainer = document.querySelector('.header-nav__container');

    navToggle.addEventListener('click', () => {
        headerNavContainer.classList.toggle('active');
    });


    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');

    let currentSlideIndex = 0;

    function updateSlidePosition() {
        track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    }

    nextButton.addEventListener('click', () => {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        updateSlidePosition();
    });

    prevButton.addEventListener('click', () => {
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        updateSlidePosition();
    });



})();
