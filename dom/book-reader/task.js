let fontSize = document.getElementsByClassName("font-size");
let book = document.getElementsByClassName("book")[0];

let bookColor = document.getElementsByClassName("book__control_color");

for (let i = 0; i < fontSize.length; i++) {
    fontSize[i].addEventListener("click", event => {
        event.preventDefault();
        document.getElementsByClassName("font-size_active")[0].classList.remove("font-size_active");
        fontSize[i].classList.add("font-size_active");
        fontSize[i].getAttribute("data-size") !== null ? book.classList.add(`font-size_${fontSize[i].getAttribute("data-size")}`) : book.className = "book";
    })
}

