'use strict'

const slides = Array.from(document.querySelectorAll(".slider__item"));
let activeSlide = document.querySelector(".slider__item_active");
const slider__dots = document.querySelectorAll(".slider__dot");

const leftArrow = document.querySelector(".slider__arrow_prev");
const rightArrow = document.querySelector(".slider__arrow_next");

rightArrow.addEventListener("click", () => {
    if (activeSlide.nextElementSibling !== null) {
        activeSlide.nextElementSibling.classList.add("slider__item_active");
        addDot();
        return;
    }
    slides[0].classList.add("slider__item_active");
    activeSlide = document.querySelector(".slider__item_active");
    addDot();
})

leftArrow.addEventListener("click", () => {
    if (activeSlide.previousElementSibling !== null) {
        activeSlide.previousElementSibling.classList.add("slider__item_active");
        addDot();
        return;
    }
    slides[slides.length - 1].classList.add("slider__item_active");
    addDot();
})

function addDot() {
    activeSlide.classList.remove("slider__dot_active");
    slides.forEach(slide => slide.classList.remove("slider__item_active"));
    const index = slides.findIndex(el => el.classList.contains("slider__item_active"));
    slider__dots[index].classList.add("slider__dot_active");
    activeSlide = slides[index];
}