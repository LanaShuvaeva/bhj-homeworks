const chatWidget = document.getElementsByClassName("chat-widget")[0];
const chatWidgetInput = document.getElementById("chat-widget__input");
const messages = document.querySelector( '.chat-widget__messages' );
const robotAnswers = ["I don't like you", "Sorry, I'm not availible right now", "Please call us at 777-777-7777", "Please stop messaging me", "I don't wanna talk to you"]

chatWidget.addEventListener("click", e => chatWidget.classList.add("chat-widget_active"));

chatWidget.addEventListener("keypress", e => {
    if (e.key === "Enter" && chatWidgetInput.value) {
        let d = new Date();

        messages.innerHTML += `
        Сообщение от клиента
            <div class="message">
                <div class="message__time">${d.getHours()}:${d.getMinutes()}</div>
                <div class="message__text">
                ${chatWidgetInput.value}
                </div>
            </div>
            `;
            setTimeout(() =>{
                messages.innerHTML += `
                Сообщение от робота
                            <div class="message message_client">
                                <div class="message__time">${d.getHours()}:${d.getMinutes()}</div>
                                <div class="message__text">${robotAnswers[Math.floor(Math.random()*robotAnswers.length)]}</div>
                            </div>
                            </div>
                `;
            }, 1000)
            chatWidgetInput.value = '';
    }
})