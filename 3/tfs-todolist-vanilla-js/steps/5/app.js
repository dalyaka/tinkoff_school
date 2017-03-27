"use strict";

var listElement = document.querySelector('.list');
var itemElementList = listElement.children;


var templateElement = document.getElementById('todoTemplate');
var templateContainer = 'content' in templateElement ? templateElement.content : templateElement;

// сформируем задачки
var todoList = [
    {
        name: 'Позвонить в сервис',
        status: 'todo'
    },
    {
        name: 'Купить хлеб',
        status: 'done'
    },
    {
        name: 'Захватить мир',
        status: 'todo'
    },
    {
        name: 'Добавить тудушку в список',
        status: 'todo'
    }
];

// функция по генерации элементов
function addTodoFromTemplate(todo) {
    var newElement = templateContainer.querySelector('.task').cloneNode(true);
    newElement.querySelector('.task__name').textContent = todo.name;
    setTodoStatusClassName(newElement, todo.status === 'todo');

    return newElement;
}

function onStatusBtnClick(event) {
    var currentTodo = event.target.parentNode;
    var isTodo = currentTodo.classList.contains('task_todo');
    setTodoStatusClassName(currentTodo, !isTodo);
}

function onDeleteBtnClick() {
    var currentTodo = event.target.parentNode;
    listElement.removeChild(currentTodo);
}

function setTodoStatusClassName(task, flag) {
    task.classList.toggle('task_todo', flag);
    task.classList.toggle('task_done', !flag);
}

todoList
    .map(addTodoFromTemplate)
    .forEach(function (element) {
        listElement.appendChild(element);
    });

// добавлять слушателей на каждую кнопку – затратно для памяти
// к счастью события распространяются по всем уровням вложенности,
// и событие клика можно ловить выше – на списке
listElement.addEventListener('click', onListClick);

function onListClick(event) {
    console.log('--- event.target', event.target);
    var target = event.target;
        
    if (isStatusBtn(target)) {
        
    }
}

function isStatusBtn() {
    // реализуйте c помощью classList
}