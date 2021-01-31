let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.responseType = 'json';
xhr.send();

console.log(document.querySelector('.item'))

function cloneItem (currency, value) {
    let item = document.createElement("div");
    item.setAttribute('class', 'item');
    item.innerHTML += `
            <div class="item__code">
                ${currency}
            </div>
            <div class="item__value">
                ${value}
            </div>
            <div class="item__currency">
                руб.
            </div>
    ` 
    document.getElementById('items').appendChild(item);
}

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        for(let charCode in xhr.response.response.Valute) {
            let value = xhr.response.response.Valute[charCode].Value;
            cloneItem(charCode, value);
            document.getElementById('loader').classList.remove('loader_active');
        }
    }
}
)