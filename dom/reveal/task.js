let reveal = document.getElementsByClassName("reveal")[0];

let isInViewport = function (element) {
    const viewportHeight = window.innerHeight; 
    const elementTop = element.getBoundingClientRect().top; 
    const elementBottom = element.getBoundingClientRect().bottom; 

    return elementTop < viewportHeight && elementBottom > 0 ? true : false;
}

    document.addEventListener("scroll", () => {
        return isInViewport(reveal) ? reveal.classList.add("reveal_active") : reveal.classList.remove("reveal_active");
    })

