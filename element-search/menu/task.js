'use strict'

const menu__links = document.querySelectorAll(".menu__link");

menu__links.forEach(menu__link => {  
    menu__link.onclick = () => {
        if (!menu__link.nextElementSibling.classList.contains("menu_active")) {
            document.querySelectorAll(".menu_active").forEach(active => active.classList.remove("menu_active"));
            menu__link.nextElementSibling.classList.add("menu_active");
            return false;
        } 
        menu__link.nextElementSibling.classList.remove("menu_active");
        return false;
    };
});