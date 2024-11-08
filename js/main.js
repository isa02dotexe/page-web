(function () {
    "use strict";


    const navToggle = document.querySelector('.nav-toggle');
    const headerNavContainer = document.querySelector('.header-nav__container');

    navToggle.addEventListener('click', () => {
        headerNavContainer.classList.toggle('active');
    });



    // GLOBAL VARIABLES
    var header = document.querySelector(".header"),
        wrapper = document.querySelector('.wrapper');

    // PRELOADER
    preloader();
    function preloader() {
        setTimeout(function () {
            wrapper.classList.add('wrapper_ready-load');
        }, 0);
    }

    // Selecione o cabeçalho
    const header = document.querySelector('.header');

    // Adicione a classe .header-scroll quando a página for rolada
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            // Adiciona a classe .header-scroll quando o usuário rolar
            header.classList.add('header-scroll');
        } else {
            // Remove a classe .header-scroll quando o usuário voltar ao topo
            header.classList.remove('header-scroll');
        }
    });


    // Opening the mobile menu
    navInit();
    function navInit() {
        var navToggle = header.querySelector(".nav-toggle");

        navToggle.addEventListener("click", function () {
            header.classList.toggle("header_menu-active");
        });

        function resizeNavMenu() {
            if (window.innerWidth > 1024 && header.classList.contains('header_menu-active')) {
                header.classList.remove('header_menu-active');
            }
        }

        document.addEventListener("click", function (e) {
            if (header.classList.contains("header_menu-active")) {
                var nav = header.querySelector(".header-nav");
                if (!nav.contains(e.target) && e.target !== navToggle) {
                    header.classList.remove("header_menu-active");
                }
            }
        });

        window.addEventListener("resize", resizeNavMenu);
    }

    // Page scroll animation
    window.addEventListener('scroll', function () {
        if (window.scrollY >= 1) {
            header.classList.add('header-scroll');
        } else {
            header.classList.remove('header-scroll');
        }
    });

    // Form validation and customization
    if (document.querySelector("form")) {
        formValidation();
    }

    function formValidation() {
        var forms = document.querySelectorAll("form");

        forms.forEach(function (form) {
            form.addEventListener("submit", function (e) {
                if (!form.checkValidity()) {
                    e.preventDefault();
                }
            });

            var inputs = form.querySelectorAll("input");
            inputs.forEach(function (input) {
                if (input.disabled) {
                    var formField = input.closest('.form-field');
                    if (formField) formField.classList.add('input-disabled');
                    var labelWrap = input.closest('.label-wrap');
                    if (labelWrap && labelWrap.classList.contains('form-group')) {
                        var btn = labelWrap.querySelector('.btn');
                        if (btn) btn.disabled = true;
                    }
                }
            });
        });
    }

    // Swiper Sliders (You'd still need to include Swiper library for this to work)
    postSlider();
    function postSlider() {
        var postSliders = document.querySelectorAll('.post-slider');
        postSliders.forEach(function (postSlider) {
            new Swiper(`.${postSlider.classList[0]} .swiper-container`, {
                slidesPerView: 1,
                spaceBetween: 32,
                centeredSlides: true,
                speed: 1000,
                pagination: {
                    el: `.${postSlider.classList[0]} .slider-pagination`,
                    clickable: true,
                },
                navigation: {
                    nextEl: `.${postSlider.classList[0]} .slider-next`,
                    prevEl: `.${postSlider.classList[0]} .slider-prev`,
                },
                breakpoints: {
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 32,
                    },
                }
            });
        });
    }



})();
