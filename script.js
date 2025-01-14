
const tg = window.Telegram.WebApp;


tg.MainButton.setText("Отправить");
tg.MainButton.show();


tg.MainButton.onClick(() => {
    tg.sendData("Данные отправлены!");
});


document.getElementById('mainButton').addEventListener('click', () => {
    tg.showAlert("Кнопка нажата!");
});