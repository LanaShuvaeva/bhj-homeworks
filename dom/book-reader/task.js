let fontSize = document.getElementsByClassName("font-size");
let book = document.getElementsByClassName("book")[0];
let bookColor = document.querySelectorAll(".book__control_color a");
let bgColor = document.querySelectorAll(".book__control_background a");

for (let i = 0; i < fontSize.length; i++) {
    fontSize[i].addEventListener("click", event => {
        event.preventDefault();
        document.getElementsByClassName("font-size_active")[0].classList.remove("font-size_active");
        fontSize[i].classList.add("font-size_active");
        book.classList.remove("font-size_small", "font-size_big");
        fontSize[i].getAttribute("data-size") !== null ? book.classList.add(`font-size_${fontSize[i].getAttribute("data-size")}`) : console.log("Regular setting");
    })
}

for (let i = 0; i < bookColor.length; i++) {
    bookColor[i].addEventListener("click", event => {
        event.preventDefault();
        document.getElementsByClassName("color_active")[0].classList.remove("color_active");
        bookColor[i].classList.add("color_active");
        book.classList.remove("book_color-gray", "book_color-whitesmoke");
        bookColor[i].getAttribute("data-color") !== null ? book.classList.add(`book_color-${bookColor[i].getAttribute("data-color")}`) : console.log("Regular setting");
    })
}

for (let i = 0; i < bgColor.length; i++) {
    bgColor[i].addEventListener("click", event => {
        event.preventDefault();
        document.getElementsByClassName("color_active")[0].classList.remove("color_active");
        bgColor[i].classList.add("color_active");
        book.classList.remove("book_bg-gray", "book_bg-black");
        bgColor[i].getAttribute("data-color") !== null ? book.classList.add(`book_bg-${bgColor[i].getAttribute("data-color")}`) : console.log("Regular setting");
    })
}








