let productQuantityControl = document.querySelectorAll(".product__quantity-control");

productQuantityControl.forEach(quantity => {
    quantity.addEventListener("click", e => {
        quantity.classList.contains("product__quantity-control_inc") ? quantity.previousElementSibling.innerText = Number(quantity.previousElementSibling.innerText) + 1 : quantity;
        quantity.classList.contains("product__quantity-control_dec") && Number(quantity.nextElementSibling.innerText) > 1 ? quantity.nextElementSibling.innerText = Number(quantity.nextElementSibling.innerText) - 1 : quantity;
    })
})

document.querySelectorAll(".product__add").forEach(addBtn => {
        let btnParent = addBtn.closest(".product");
       
    addBtn.addEventListener("click", e => {
        let duplicateId = [...document.querySelector(".cart__products").children].find(item => item.dataset.id === btnParent.dataset.id);
        console.log(duplicateId)
        if (duplicateId === undefined) {
            let newProduct = document.createElement("div");
            newProduct.setAttribute("class", "cart__product");
            newProduct.setAttribute("data-id", `${btnParent.dataset.id}`);
            newProduct.innerHTML += `
                <img class="cart__product-image" src="${btnParent.querySelector("img").src}">
                <div class="cart__product-count">${btnParent.querySelector(".product__quantity-value").innerText}</div>
                `;
             document.getElementsByClassName("cart__products")[0].insertAdjacentElement("beforeend", newProduct);
        } else {
            duplicateId.querySelector(".cart__product-count").innerText = Number(duplicateId.querySelector(".cart__product-count").innerText) + Number(btnParent.querySelector(".product__quantity-value").innerText);
        }
    })
})