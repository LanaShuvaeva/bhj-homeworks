'user strict'

const dropdownVal = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItems = Array.from(document.querySelectorAll('.dropdown__item'));

dropdownVal.addEventListener('click', () => {
    if (!dropdownList.classList.contains('dropdown__list_active')) {
        dropdownList.classList.add('dropdown__list_active');
        return;
    }
         dropdownList.classList.remove('dropdown__list_active');
})

dropdownItems.forEach(item => {
    item.addEventListener('click', (event) => {
        dropdownVal.textContent = item.textContent;
        dropdownList.classList.remove('dropdown__list_active');
        event.preventDefault();
        return;
    })
})
