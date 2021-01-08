'use strict'

const slides = Array.from(document.querySelectorAll(".slider__item"));
const arrSliderDots = Array.from(document.querySelectorAll(".slider__dot"));

let activeSlide = document.querySelector(".slider__item_active");

const leftArrow = document.querySelector(".slider__arrow_prev");
const rightArrow = document.querySelector(".slider__arrow_next");

let slideNumber = 0;


rightArrow.addEventListener("click", () => {
    if (slideNumber + 1 < slides.length) {
        slides[slideNumber].nextElementSibling.classList.add("slider__item_active");
        slides[slideNumber].classList.remove("slider__item_active");
        slideNumber += 1;

        arrSliderDots[slideNumber].classList.add("slider__dot_active");
        arrSliderDots[slideNumber].previousElementSibling.classList.remove("slider__dot_active");
        return;
    }
    
    slides[0].classList.add("slider__item_active");
    slides[slideNumber].classList.remove("slider__item_active");
    slideNumber = 0;

    arrSliderDots[0].classList.add("slider__dot_active");
    arrSliderDots[slides.length - 1].classList.remove("slider__dot_active");
})

leftArrow.addEventListener("click", () => {
    if (slideNumber - 1 >= 0) {
        slides[slideNumber].previousElementSibling.classList.add("slider__item_active");
        slides[slideNumber].classList.remove("slider__item_active");
        slideNumber -= 1;

        arrSliderDots[slideNumber].classList.add("slider__dot_active");
        arrSliderDots[slideNumber].nextElementSibling.classList.remove("slider__dot_active");
        return;
    }
    slides[slides.length - 1].classList.add("slider__item_active");
    slides[slideNumber].classList.remove("slider__item_active");
    arrSliderDots[slideNumber].classList.remove("slider__dot_active");
    slideNumber = slides.length - 1;

    arrSliderDots[slides.length - 1].classList.add("slider__dot_active");
})

