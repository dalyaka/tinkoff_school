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

function setTodoStatusClassName(todo, flag) {
    todo.classList.toggle('task_todo', flag);
    todo.classList.toggle('task_done', !flag);
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
    var target = event.target;
    var element;
        
    if (isStatusBtn(target)) {
        element = target.parentNode;
        changeTodoStatus(element);
    }

    if (isDeleteBtn(target)) {
        element = target.parentNode;
        deleteTodo(element);
    }
}

function isStatusBtn(target) {
    return target.classList.contains('task__status');
}

function isDeleteBtn(target) {
    return target.classList.contains('task__delete-button');
}

function changeTodoStatus(element) {
    var isTodo = element.classList.contains('task_todo');
    setTodoStatusClassName(element, !isTodo);
}

function deleteTodo(element) {
    listElement.removeChild(element);
}

// пришло время реализовать ввод по имени задачи
var inputElement = document.querySelector('.add-task__input');
inputElement.addEventListener('keydown', onInputKeydown);

function onInputKeydown(event) {
    console.log('--- event.keyCode', event.keyCode);
    if (event.keyCode !== 13) {
        return;
    }

    var ENTER_KEYCODE = 13;
    if (event.keyCode !== ENTER_KEYCODE) {
        return;
    }

    // значит кликнули
    console.log('--- inputElement.value', inputElement.value);
}

// Задача:
// 1. Вставьте новую тудушку
// 2. Вставьте новую тудушку при отсутствии таких же