'use strict'

const slides = Array.from(document.querySelectorAll(".slider__item"));
let activeSlide = document.querySelector(".slider__item_active");

const leftArrow = document.querySelector(".slider__arrow_prev");
const rightArrow = document.querySelector(".slider__arrow_next");



rightArrow.addEventListener("click", () => {
    slideNumber++;
    if (activeSlide.nextElementSibling !== null) {
        activeSlide.classList.remove("slider__item_active");
        activeSlide.nextElementSibling.classList.add("slider__item_active");
        activeSlide = document.querySelector(".slider__item_active");
        return;
    }
        slides[slides.length - 1].classList.remove("slider__item_active");
        slides[0].classList.add("slider__item_active");
        activeSlide = document.querySelector(".slider__item_active");
})

leftArrow.addEventListener("click", () => {
    if (activeSlide.previousElementSibling !== null) {
        activeSlide.classList.remove("slider__item_active");
        activeSlide.previousElementSibling.classList.add("slider__item_active");
        activeSlide = document.querySelector(".slider__item_active");
        return;
    }   
        slides[0].classList.remove("slider__item_active");
        slides[slides.length - 1].classList.add("slider__item_active");
        activeSlide = document.querySelector(".slider__item_active");
        console.log(slideNumber)
})

