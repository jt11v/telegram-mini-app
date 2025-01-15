
// const tg = window.Telegram.WebApp;

// tg.expand();

// tg.MainButton.setText("Отправить");
// tg.MainButton.show();

// tg.MainButton.onClick(() => {
//     const message = document.getElementById('messageInput').value;
//     if (message) {
//         tg.sendData(message); 
//     } else {
//         tg.showAlert("Введите сообщение!"); 
//     }
// });

// document.getElementById('sendButton').addEventListener('click', () => {
//     const message = document.getElementById('messageInput').value;
//     if (message) {
//         tg.sendData(message); 
//     } else {
//         tg.showAlert("Введите сообщение!"); 
//     }
// });




const tg = window.Telegram.WebApp;
tg.expand(); 


const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');


let tasks = [];


function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Введите задачу!');
        return;
    }

    
    tasks.push(taskText);

    
    taskInput.value = '';

    
    renderTasks();
}


function deleteTask(index) {
    tasks.splice(index, 1); 
    renderTasks(); 
}


function renderTasks() {
    
    taskList.innerHTML = '';

    
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;

        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.addEventListener('click', () => deleteTask(index));

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}


addButton.addEventListener('click', addTask);


taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});


tg.ready();