'use strict'

let formData = new FormData();
let xhr = new XMLHttpRequest();

const progress = document.getElementById('progress');

document.getElementById('form').addEventListener('submit', e => {
    e.preventDefault();
    let file = document.querySelector('input').files[0]; 
    formData.append('file', file); 
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php', true); 
    xhr.upload.onprogress = (e) => document.getElementById('progress').value = e.loaded/e.total; 
    xhr.send(formData);
});