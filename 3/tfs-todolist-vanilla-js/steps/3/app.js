"use strict";

var listElement = document.querySelector('.list');
var itemElementList = listElement.children;


var templateElement = document.getElementById('todoTemplate');
var templateContainer = 'content' in templateElement ? templateElement.content : templateElement;

// Задание: создайте и отрисуйте список тудушек,
// в котором одни элементы будут невыполнены, а другие выполнены
// за выполнение отвечают классы task_todo и task_done

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
    // https://developer.mozilla.org/ru/docs/Web/API/Node/cloneNode
    var newElement = templateContainer.querySelector('.task').cloneNode(true);
    newElement.querySelector('.task__name').textContent = todo.name;

    if (todo.status === 'todo') {
        newElement.classList.add('task_todo');
        newElement.classList.remove('task_done');
    } else {
        newElement.classList.remove('task_todo');
        newElement.classList.add('task_done');
    }

    return newElement;
}

todoList
    .map(addTodoFromTemplate)
    .forEach(function (element) {
        listElement.appendChild(element);
    });


// добавим клик по todo:
var statusBtns = listElement.querySelectorAll('.task__status');

for (var i = 0; i < statusBtns.length; i++) {
    var statusBtn = statusBtns[i];

    statusBtn.addEventListener('click', onStatusBtnClick);
}
// https://learn.javascript.ru/introduction-browser-events
// https://learn.javascript.ru/obtaining-event-object
function onStatusBtnClick (event) {
    console.log('--- event', event);
    console.log('--- event', event.target);
    console.log('--- statusBtn', statusBtn);

    var currentTask = event.target.parentNode;
    // if (currentTask.classList.contains('task_todo')) {
    //     currentTask.classList.remove('task_todo');
    //     currentTask.classList.add('task_done');
    // } else {
    //     currentTask.classList.add('task_todo');
    //     currentTask.classList.remove('task_done');
    // }

    var isTodo = currentTask.classList.contains('task_todo');
    currentTask.classList.toggle('task_todo', !isTodo);
    currentTask.classList.toggle('task_done', isTodo);
}

// задача:
// 1. вынести навешивание классов в функцию setTodoStatusClassName
// 2. убрать цикл обхода кнопок. Сделать навешивание события при генерации шаблона
// 3. добавить аналогично удаление тудушки через
// https://developer.mozilla.org/ru/docs/Web/API/Node/removeChild