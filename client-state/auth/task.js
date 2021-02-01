'use stict'

let signin = document.getElementById('signin');
let form = document.querySelector('form');
let inputLogin = document.querySelectorAll('input')[0];
let inputPassword = document.querySelectorAll('input')[1];
let welcome = document.getElementById('welcome');

window.onload = () => signin.classList.add('signin_active');

form.addEventListener('submit', e => {
    let formData = new FormData(document.getElementById('signin__form'));
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php', true);
    xhr.addEventListener('readystatechange', function() {
        if (this.readyState == xhr.DONE && this.status == 200) {
            let data = JSON.parse(this.responseText);
            console.log(data)
            if (data.success === false) {
                alert('Неверный логин/пароль');
                inputLogin.value = '';
                inputPassword.value = '';
            } else {
                signin.classList.remove('signin_active');
                welcome.classList.add('welcome_active');
                document.getElementById('user_id').innerText = data.user_id;
            }
            
        }
    })
    xhr.send(formData);
    e.preventDefault();
})
