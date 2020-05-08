const timerMinutes = prompt(`Hey, give me time in minutes to start the timer`);
const timerCurrent = document.getElementById('timer');
const timerStart = timerMinutes * 60000 + new Date().getTime();

const countdownFunc = function() {
    const now = new Date().getTime();
    const dif = timerStart - now;
    const hours = Math.floor((dif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((dif % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((dif % (1000 * 60)) / 1000);
    
    timerCurrent.innerHTML = `${hours}:${minutes}:${seconds}`;

    if (dif < 0) {   
        alert('You just won $1,000,000!!'); 
        timerCurrent.innerHTML = "Yaaay!!";
        window.location.replace('http://www.example.com');
        clearInterval(countdownFunc);
    }
}

setInterval(countdownFunc, 1000);

////////////////////////// Fun ////////////////////////////////////
const timerDiv = document.getElementById('status');

timerDiv.addEventListener('mouseover', function() {
	console.log('MOUSED OVER ME!');
	const height = Math.floor(Math.random() * window.innerHeight);
	const width = Math.floor(Math.random() * window.innerWidth);
	timerDiv.style.left = `${width - 200}px`;
	timerDiv.style.top = `${height - 200}px`;
});


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
