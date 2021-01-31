let inputText = document.getElementById("task__input");

function addNewTask(e) {
    e.preventDefault();
    if(inputText.value.length > 0) {
    let newTask = document.createElement("div");
    newTask.setAttribute("class", "task");
    newTask.innerHTML += `
            <div class="task__title">
            ${inputText.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        `;
    document.getElementById("tasks__list").insertAdjacentElement("afterbegin", newTask);
    inputText.value = "";
    }
};

function deleteTask(e) {
    if ( e.target.classList.contains("task__remove")) {
        e.target.parentElement.remove();
    }
}

inputText.addEventListener("keypress", e => {
    if (e.key === "Enter") {
        addNewTask();
    }
})

document.getElementById("tasks__add").addEventListener("click", addNewTask);
document.getElementById("tasks__list").addEventListener("click", deleteTask);
