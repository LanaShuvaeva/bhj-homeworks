const holes = document.querySelectorAll(".hole");
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

holes.forEach((hole) => {
    hole.addEventListener('click', () => {
    hole.classList.contains("hole_has-mole") ? dead.textContent++ : lost.textContent++;
    if(dead.innerHTML > 10) {
        alert("You won!");
        dead.innerHTML = 0;
        lost.innerHTML = 0;
    }
    if (lost.innerHTML > 5) {
        alert("You lost! Try again later");
        dead.innerHTML = 0;
        lost.innerHTML = 0;
    }
    })
});
