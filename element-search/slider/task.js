'use strict'

const slides = Array.from(document.querySelectorAll(".slider__item"));
let activeSlide = document.querySelector(".slider__item_active");
const slider__dots = document.querySelectorAll(".slider__dot");

const leftArrow = document.querySelector(".slider__arrow_prev");
const rightArrow = document.querySelector(".slider__arrow_next");

rightArrow.addEventListener("click", () => {
    if (activeSlide.nextElementSibling !== null) {
        activeSlide.classList.remove("slider__item_active");
        activeSlide.nextElementSibling.classList.add("slider__item_active");
        activeSlide = document.querySelector(".slider__item_active");
        addDot();
        return;
    }
    slides[slides.length - 1].classList.remove("slider__item_active");
    slides[0].classList.add("slider__item_active");
    activeSlide = document.querySelector(".slider__item_active");
    addDot();
})

leftArrow.addEventListener("click", () => {
    if (activeSlide.previousElementSibling !== null) {
        activeSlide.classList.remove("slider__item_active");
        activeSlide.previousElementSibling.classList.add("slider__item_active");
        activeSlide = document.querySelector(".slider__item_active");
        addDot();
        return;
    }
    slides[0].classList.remove("slider__item_active");
    slides[slides.length - 1].classList.add("slider__item_active");
    activeSlide = document.querySelector(".slider__item_active");
    addDot();
})

function findIndx() {
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains("slider__item_active")) {
            return i;
        }
    }
}

function addDot() {
    slider__dots.forEach(slide => slide.classList.remove("slider__dot_active"));
    slider__dots[findIndx()].classList.add("slider__dot_active");
}




// 'use strict'

// const slides = Array.from(document.querySelectorAll(".slider__item"));
// let activeSlide = document.querySelector(".slider__item_active");
// const slider__dots = document.querySelectorAll(".slider__dot");

// const leftArrow = document.querySelector(".slider__arrow_prev");
// const rightArrow = document.querySelector(".slider__arrow_next");

// rightArrow.addEventListener("click", () => {
//     if (activeSlide.nextElementSibling !== null) {
//         activeSlide.classList.remove("slider__item_active");
//         activeSlide.nextElementSibling.classList.add("slider__item_active");
//         activeSlide = document.querySelector(".slider__item_active");
//         addDot();
//         return;
//     }
//         slides[slides.length - 1].classList.remove("slider__item_active");
//         slides[0].classList.add("slider__item_active");
//         activeSlide = document.querySelector(".slider__item_active");
//         addDot();
// })

// leftArrow.addEventListener("click", () => {
//     if (activeSlide.previousElementSibling !== null) {
//         activeSlide.classList.remove("slider__item_active");
//         activeSlide.previousElementSibling.classList.add("slider__item_active");
//         activeSlide = document.querySelector(".slider__item_active");
//         addDot();
//         return;
//     }   
//         slides[0].classList.remove("slider__item_active");
//         slides[slides.length - 1].classList.add("slider__item_active");
//         activeSlide = document.querySelector(".slider__item_active");
//         addDot();
// })

// function findIndx() {
//     for (let i = 0; i < slides.length; i++) {
//         if (slides[i].classList.contains("slider__item_active")) {
//             return i;
//         }
//     }
// }

// function addDot() {
//     if (findIndx() === 0) {
//         slider__dots[findIndx()].classList.add("slider__dot_active");
//         slider__dots[slides.length -1].classList.remove("slider__dot_active");
//     }
//     slider__dots[findIndx()].classList.add("slider__dot_active");
//     slider__dots[findIndx()].previousElementSibling.classList.remove("slider__dot_active");
// }