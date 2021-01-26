const checkboxes = document.querySelectorAll('.interest__check');

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', e => {
        let nestedCheckBoxes = e.target.closest('.interest').querySelectorAll('.interest__check');
        nestedCheckBoxes.forEach((box) => box.checked = e.target.checked);
    });
});
