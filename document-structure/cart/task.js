let productQuantityValue = document.querySelectorAll(".product__quantity-value");

let productQuantityControl = document.querySelectorAll(".product__quantity-control");
let decrement = document.querySelectorAll(".product__quantity-control_dec");
let increment = document.querySelectorAll(".product__quantity-control_inc");



productQuantityControl.forEach(quantity => {
    quantity.addEventListener("click", e => {
        quantity.classList.contains("product__quantity-control_inc") ? quantity.previousElementSibling.innerText = Number(quantity.previousElementSibling.innerText) + 1 : quantity;
        quantity.classList.contains("product__quantity-control_dec") && Number(quantity.nextElementSibling.innerText) > 1 ? quantity.nextElementSibling.innerText = Number(quantity.nextElementSibling.innerText) - 1 : quantity;
    })
})


