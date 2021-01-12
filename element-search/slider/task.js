'use strict'

const slides = Array.from(document.querySelectorAll(".slider__item"));
const arrSliderDots = Array.from(document.querySelectorAll(".slider__dot"));
const leftArrow = document.querySelector(".slider__arrow_prev");
const rightArrow = document.querySelector(".slider__arrow_next");

let slideNumber = 0;

function showSlide(active) {
    slides[slideNumber].classList.remove("slider__item_active");
    slides[active].classList.add("slider__item_active");

    arrSliderDots[slideNumber].classList.remove("slider__dot_active");
    arrSliderDots[active].classList.add("slider__dot_active");
}

rightArrow.addEventListener("click", () => {
    if (slideNumber + 1 < slides.length) {
        showSlide(slideNumber + 1);
        slideNumber += 1;
        return;
    }
    showSlide(0);
    slideNumber = 0;
});

leftArrow.addEventListener("click", () => {
    if (slideNumber - 1 >= 0) {
        showSlide(slideNumber - 1);
        slideNumber -= 1;
        return;
    }
    showSlide(slides.length - 1);
    slideNumber = slides.length - 1;
});

for (let i = 0; i < slides.length; i++) {
    arrSliderDots[i].addEventListener("click", () => {
        showSlide(i);
        slideNumber = i;
    });
};
