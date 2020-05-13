const modal = document.getElementById("modal_main");
const modal__close = document.querySelector(".modal__close");
const button = document.querySelector(".btn");
const modal_success = document.querySelector("#modal_success");

setTimeout(function() {
    modal.classList.add("modal_active");
}, 2000);

modal__close.addEventListener("click", function() {
    modal.classList.remove("modal_active");
});

button.addEventListener("click", function() {
    modal_success.classList.add("modal_active");
})
