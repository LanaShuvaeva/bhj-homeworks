'use strict'

let btnClosePopup = document.querySelector('.modal__close');
let subscribePopup = document.getElementById('subscribe-modal');


window.onload = () => {
    if (document.cookie === '') {
       subscribePopup.classList.add('modal_active');
    }
}


btnClosePopup.onclick = () => {
    document.cookie = 'closedPopup=true';
    subscribePopup.classList.remove('modal_active');
}

