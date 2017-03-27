"use strict";

var listElement = document.querySelector('.list');
var itemElementList = listElement.children;


var templateElement = document.getElementById('todoTemplate');
var templateContainer = 'content' in templateElement ? templateElement.content : templateElement;

var statistic = document.querySelector('.statistic')
var statistics = {
  total: statistic.querySelector('.statistic__total'),
  done: statistic.querySelector('.statistic__done'),
  todo: statistic.querySelector('.statistic__left'),
}

var currentFilter = 'all';

var filter = document.querySelector('.filters');
var filters = {
  all: filter.querySelector('.filter__all'),
  done: filter.querySelector('.filter__done'),
  todo: filter.querySelector('.filter__todo'),
}


// сформируем задачки
var todoList = [
    {
        name: 'Позвонить в сервис',
        status: 'todo',
        id: 0,
    },
    {
        name: 'Купить хлеб',
        status: 'done',
        id: 1,
    },
    {
        name: 'Захватить мир',
        status: 'todo',
        id: 2,
    },
    {
        name: 'Добавить тудушку в список',
        status: 'todo',
        id: 3,
    }
];

var counter = todoList.length;

// функция по генерации элементов
function addTodoFromTemplate(todo) {
    var newElement = templateContainer.querySelector('.task').cloneNode(true);
    newElement.querySelector('.task__name').textContent = todo.name;
    setTodoStatusClassName(newElement, todo.status === 'todo');
    newElement.setAttribute('todo-id', todo.id);

    return newElement;
}

function setTodoStatusClassName(todo, flag) {
    todo.classList.toggle('task_todo', flag);
    todo.classList.toggle('task_done', !flag);
}

function onListClick(event) {
    var target = event.target;
    var element = target.parentNode;

    var id = +element.getAttribute('todo-id');
    var todo = todoList.filter(item => item.id === id)[0];

    if (isStatusBtn(target)) {
        changeTodoStatus(element, todo);
    }

    if (isDeleteBtn(target)) {
        deleteTodo(element, todo);
    }
}

function isStatusBtn(target) {
    return target.classList.contains('task__status');
}

function isDeleteBtn(target) {
    return target.classList.contains('task__delete-button');
}

function changeTodoStatus(element, todo) {
    var isTodo = element.classList.contains('task_todo');
    setTodoStatusClassName(element, !isTodo);

    todo.status = !isTodo ? 'todo' : 'done';
    renderStatistics();
    changeListItems();
}

function deleteTodo(element, todo) {
    listElement.removeChild(element);
    todoList.splice(todoList.findIndex(({id}) => todo.id === id), 1);
    renderStatistics();
}

function onInputKeydown(event) {
    if (event.keyCode !== 13) {
        return;
    }

    var ENTER_KEYCODE = 13;
    if (event.keyCode !== ENTER_KEYCODE) {
        return;
    }

    var todoName = inputElement.value.trim();

    if (todoName.length === 0 || checkIfTodoAlreadyExists(todoName)) {
        return;
    }

    var todo = createNewTodo(todoName);

    todoList.push(todo);

    insertTodoElement(addTodoFromTemplate(todo));
    inputElement.value = '';
    renderStatistics();
    currentFilter === 'done' ? changeListItems() : null;
}

function checkIfTodoAlreadyExists(todoName) {
    var todoElements = listElement.querySelectorAll('.task__name');
    var namesList = Array.prototype.map.call(todoElements, function(element) {
        return element.textContent;
    });
    return namesList.indexOf(todoName) > -1;
}

function createNewTodo(name) {
    counter++;
    return {
        name: name,
        status: 'todo',
        id: counter,
    }
}

todoList
    .map(addTodoFromTemplate)
    .forEach(insertTodoElement);

listElement.addEventListener('click', onListClick);

var inputElement = document.querySelector('.add-task__input');
inputElement.addEventListener('keydown', onInputKeydown);

// Задача:
// исправьте багу с добавлением insertBefore в пустой массив
// создайте статистику
//
function insertTodoElement(elem) {
    if (listElement.children) {
        listElement.insertBefore(elem, listElement.firstElementChild);
    } else {
        listElement.appendChild(elem);
    }
}

///////////////////////////////////////////////////////////////////////////////////////
//------------------------------фильтры, статистика ---------------------------------//

var filtersElem = document.querySelectorAll('.filters__item');
[].forEach.call(filtersElem, filter => filter.addEventListener('click', onFilterClick));

renderStatistics();

var filtersObj = {
  task_done: 'done',
  task_todo: 'todo',
  task: 'all',
};

function onFilterClick(evt) {
  var target = evt.target;
  var newFilter = target.getAttribute('data-filter');

  if (newFilter === currentFilter) {
    return null;
  }

  changeFilterValue(newFilter);
  changeListItems();
}

function changeFilterValue(newFilter) {
  filters[currentFilter].classList.remove('filters__item_selected');
  currentFilter = newFilter;
  filters[currentFilter].classList.add('filters__item_selected');
}

function changeListItems() {
  [].forEach.call(itemElementList, item => {
    var isVisible = [].some.call(item.classList, className => filtersObj[className] === currentFilter);
    item.classList.toggle('invisible', !isVisible)
  });
}



function renderStatistics() {
  var allCount = todoList.length;
  var doneCount = todoList.filter(item => item.status === 'done').length;

  statistics.total.textContent = allCount;
  statistics.done.textContent = doneCount;
  statistics.todo.textContent = allCount - doneCount;
}
