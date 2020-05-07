const startTimer = document.getElementById('timer');
const output = document.getElementById('timer');


const countdownFunc = function() {
        if (output.textContent > 0) output.textContent--;

        if (output.textContent == 0) {
            alert('Вы победили в конкурсе!');
            output.textContent = startTimer;
        }
    }

setInterval(countdownFunc, 1000);





// const countdownFunc = function() {
//     const startTimer = document.getElementById('timer');
//     const output = document.getElementById('timer');
//         if (output.textContent > 0) output.textContent--;

//         if (output.textContent == 0) {
//             alert('Вы победили в конкурсе!');
//             output.textContent = startTimer;
//         }
//     }

// setInterval(countdownFunc, 1000);