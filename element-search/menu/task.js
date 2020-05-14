const menu__links = document.querySelectorAll(".menu__link");
const menu__subs = document.querySelectorAll(".menu_sub");


// console.log(menu__subs[0].classList.add("menu_active"));

menu__links.forEach(menu__link => {
    const closest = menu__link.closest(".menu_sub");
    // const dropDown = parent.contains(ul)



        menu__link.addEventListener("click", function() {

        if (closest !== null) {
                closest.classList.add("menu_active");
                console.log("clicked!");
        }
        console.log("mooomooo clicked!");
    });


console.log(closest);

});

// console.log(menu__links[3].closest(".menu_sub"))



// const menu__links = document.querySelectorAll(".menu__link");
// const menu__subs = document.querySelectorAll(".menu__sub");

// menu__links.forEach(menu__link => {
//     const closest = menu__link.closest(".menu_sub");
//     if ( closest !== null) {
//         menu__link.addEventListener("click", function() {
//             closest.classList.add("menu_active");
//             console.log("clicked!");
//         });
//         console.log(closest);
//     }
// });

// console.log(menu__links[3].closest(".menu_sub"))