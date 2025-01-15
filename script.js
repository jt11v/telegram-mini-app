// Инициализация Telegram Web App
const tg = window.Telegram.WebApp;
tg.expand(); // Развернуть приложение на весь экран

// Элементы DOM
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const userName = document.getElementById('userName');

// Массив для хранения задач
let tasks = [];

// Получаем данные пользователя из Telegram Web App
const initData = tg.initData || '';
const initDataUnsafe = tg.initDataUnsafe || {};

// Отображаем информацию о пользователе
if (initDataUnsafe.user) {
    const user = initDataUnsafe.user;
    userName.textContent = `Привет, ${user.first_name || 'пользователь'}!`;
    if (user.username) {
        userName.textContent += ` (@${user.username})`;
    }
}

// Функция для добавления задачи
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Введите задачу!');
        return;
    }

    // Добавляем задачу в массив
    tasks.push(taskText);

    // Очищаем поле ввода
    taskInput.value = '';

    // Обновляем список задач
    renderTasks();
}

// Функция для удаления задачи
function deleteTask(index) {
    tasks.splice(index, 1); // Удаляем задачу из массива
    renderTasks(); // Обновляем список задач
}

// Функция для отображения задач
function renderTasks() {
    // Очищаем список
    taskList.innerHTML = '';

    // Добавляем каждую задачу в список
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;

        // Кнопка для удаления задачи
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.addEventListener('click', () => deleteTask(index));

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

// Обработчик нажатия на кнопку "Добавить"
addButton.addEventListener('click', addTask);

// Обработчик нажатия на Enter в поле ввода
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Инициализация Web App
tg.ready();