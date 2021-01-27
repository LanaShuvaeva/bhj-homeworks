const toolTips = document.querySelectorAll(".has-tooltip");

toolTips.forEach(toolTip => {
    toolTip.addEventListener("click", e => {
        e.preventDefault();
        if (toolTip.nextElementSibling === null || !toolTip.nextElementSibling.classList.contains("tooltip")) {
            let newToolTip = document.createElement("div");
            newToolTip.textContent = toolTip.title;
            newToolTip.setAttribute("class", "tooltip tooltip_active");
            toolTip.insertAdjacentElement("afterEnd", newToolTip);
            return newToolTip.style = toolTipPosition(toolTip);
        }       
        toolTip.nextElementSibling.classList.toggle("tooltip_active");
        return toolTip.nextElementSibling.style = toolTipPosition(toolTip);
    })
})

function toolTipPosition(toolTip) {
    let rect = toolTip.getBoundingClientRect();
    return `top: ${rect.top+20}px; left: ${rect.left}px`;
}
