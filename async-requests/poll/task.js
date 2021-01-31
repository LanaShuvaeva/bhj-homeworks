'use strict'

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.responseType = 'json';
xhr.send();

function newQuestionFunc() {
    document.getElementById('poll__title').innerText = xhr.response.data.title;
    for (let answer in xhr.response.data.answers) {
        let newBtn = document.createElement('button');
        newBtn.setAttribute('class', 'poll__answer');
        newBtn.innerText = xhr.response.data.answers[answer];
        document.getElementById('poll__answers').appendChild(newBtn);
    }
}

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        newQuestionFunc()

        for (let i = 0; i < document.querySelectorAll('.poll__answer').length; i++) {
            document.querySelectorAll('.poll__answer')[i].addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');
            })
        }
        }
    })




