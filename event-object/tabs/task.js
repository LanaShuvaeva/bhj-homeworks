'use strict'

const tabs = Array.from(document.querySelectorAll('.tab'));
let activeTab = document.querySelector('.tab_active');
let activeContent = document.querySelector('.tab__content_active');
const contents = Array.from(document.querySelectorAll('.tab__content'));

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        if (!tab.classList.contains('tab_active')) {
            activeTab.classList.remove('tab_active');
            tab.classList.add('tab_active');
            const index = tabs.findIndex(el => el.classList.contains("tab_active"));
            activeTab = tabs[index];
            activeContent.classList.remove('tab__content_active');
            activeContent = contents[index];
            contents[index].classList.add('tab__content_active');
            return;
        }
        const index = tabs.findIndex(el => el.classList.contains("tab_active"));
        tab.classList.remove('tab_active');
        contents[index].classList.remove('tab__content_active');
        return;
    })
})