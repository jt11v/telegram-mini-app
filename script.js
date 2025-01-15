
const tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.setText("Отправить");
tg.MainButton.show();

tg.MainButton.onClick(() => {
    const message = document.getElementById('messageInput').value;
    if (message) {
        tg.sendData(message); 
    } else {
        tg.showAlert("Введите сообщение!"); 
    }
});

document.getElementById('sendButton').addEventListener('click', () => {
    const message = document.getElementById('messageInput').value;
    if (message) {
        tg.sendData(message); 
    } else {
        tg.showAlert("Введите сообщение!"); 
    }
});