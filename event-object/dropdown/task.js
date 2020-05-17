'user strict'

const dropdownVal = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItems = Array.from(document.querySelectorAll('.dropdown__item'));

dropdownVal.addEventListener('click', () => {
    dropdownList.classList.add('dropdown__list_active');
    return;
})

dropdownItems.forEach(item => {
    item.addEventListener('click', (event) => {
        dropdownVal.textContent = item.textContent;
        dropdownList.classList.remove('dropdown__list_active');
        event.preventDefault();
        return;
    })
})
