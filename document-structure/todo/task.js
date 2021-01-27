let inputText = document.getElementById("task__input");

function addNewTask() {
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
    e.target.classList.contains("task__remove") ? e.target.parentElement.remove() : e.target;
}

inputText.addEventListener("keypress", e => {
    e.key === "Enter" ? addNewTask() : console.log("Press enter");
})

document.getElementById("tasks__add").addEventListener("click", addNewTask);
document.getElementById("tasks__list").addEventListener("click", deleteTask);
