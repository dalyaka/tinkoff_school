"use strict";

var listElement = document.querySelector('.list');
var itemElementList = listElement.children;

// Задание: добавить несколько тудушек

// сформируем задачки
var todoList = [
    'Позвонить в сервис',
    'Купить хлеб',
    'Захватить мир',
    'Добавить тудушку в список'
];

// функция по генерации элементов
function addTodo(name) {
    var htmlToAdd = '<div class="task__status task__status_todo"></div>' +
        '<span class="task__name">' + name + '</span>' +
        '<div class="task__delete-button">❌</div>';

    var newItemElement = document.createElement('li');
    newItemElement.classList.add('list__item', 'task', 'task_todo');
    newItemElement.innerHTML = htmlToAdd;
    return newItemElement;
}

// добавление элементов
todoList
    .map(addTodo)
    .forEach(function (element) {
        listElement.appendChild(element);
    });

// Альтернативный вариант – template
// http://frontender.info/template/
var templateElement = document.getElementById('todoTemplate');
var templateContainer = 'content' in templateElement ? templateElement.content : templateElement;

// функция по генерации элементов
function addTodoFromTemplate(name) {
    var newElement = templateContainer.querySelector('.task').cloneNode(true);
    newElement.querySelector('.task__name').textContent = name;
    return newElement;
}

todoList
    .map(addTodoFromTemplate)
    .forEach(function (element) {
        listElement.appendChild(element);
    });

// Задание: создайте и отрисуйте список тудушек,
// в котором одни элементы будут невыполнены, а другие выполнены
// за выполнение отвечают классы task_todo и task_done
// добавление делается через classList add/remove:
// newElement.classList.add('task_todo');

// https://developer.mozilla.org/ru/docs/Web/API/Element/classList