const modals = document.querySelectorAll(".modal");
const modals__close = document.querySelectorAll(".modal__close");
const button = document.querySelector(".btn");
const modal_success = document.querySelector("#modal_success");

for (let modal__close of modals__close) {
    modal__close.addEventListener("click", function() {
        modals.forEach(modal => {
            modal.classList.remove("modal_active");
        })
    });    
};

setTimeout(function() {
    modals[0].classList.add("modal_active");
}, 2000);

button.addEventListener("click", function() {
    modal_success.classList.add("modal_active");
});