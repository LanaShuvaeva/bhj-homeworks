'use strict'

let editor = document.getElementById('editor');
let btnClear = document.querySelector('.btn-clear');

editor.oninput = () => localStorage.setItem('text', editor.value);
window.onload = () => {editor.value = localStorage.getItem('text')};

btnClear.onclick = () =>  {
    editor.value = '';
    localStorage.removeItem('text');
}

