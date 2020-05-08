const cookie = document.getElementById("cookie");
const clickCounter = document.getElementById("clicker__counter");
const clickerSpeed = document.getElementById("clicker__speed");

cookie.onmousedown = function() {
    cookie.width -= 20;
    clickCounter.innerHTML++;
}

cookie.onmouseup = function() {
    cookie.width += 20;
}

cookie.onclick = function() {
    const firstClick = new Date().getTime();
    cookie.onclick = function() {
        const secondClick = new Date().getTime();
        clickerSpeed.textContent = (((secondClick - firstClick) / 1000) / clickCounter.textContent).toFixed(2);
    }
}

// Cookie catcher
cookie.addEventListener('click', function() {
	const height = Math.floor(Math.random() * window.innerHeight);
	const width = Math.floor(Math.random() * window.innerWidth);
	cookie.style.left = `${width - 200}px`;
	cookie.style.top = `${height + 100}px`;
});
