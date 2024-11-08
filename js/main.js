(function () {
    "use strict";


    const navToggle = document.querySelector('.nav-toggle');
    const headerNavContainer = document.querySelector('.header-nav__container');

    navToggle.addEventListener('click', () => {
        headerNavContainer.classList.toggle('active');
    });




})();
