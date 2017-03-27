"use strict";


var listElement = document.querySelector('.list'); // ← добавляйте Element для явного указания переменной
// https://learn.javascript.ru/searching-elements-dom

// https://developer.mozilla.org/en-US/docs/Web/API/Element
// https://developer.mozilla.org/en-US/docs/Web/API/Node
// https://learn.javascript.ru/traversing-dom
console.dir(listElement);
console.log(listElement.children);
console.log(listElement.firstChild);
console.log(listElement.firstElementChild);
console.log(listElement.lastElementChild);
console.log(listElement.parentElement);
//
var itemElementList = listElement.children;
// itemElementList = document.querySelectorAll('.list__item');
// itemElementList = document.querySelectorAll('.list .list__item');
// в контексте нашей задачи это всё одно и то же
// В: а на что можно натолкнуться при использовании закомментированных способов?
//
// // var itemElements = document.querySelectorAll('.list__item');
//
var todo = 'Добавить тудушку в список';

var newItemElement = document.createElement('li');
newItemElement.classList.add('list__item', 'task', 'task_todo'); // https://developer.mozilla.org/ru/docs/Web/API/Element/classList
newItemElement.innerHTML = todo; // https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML

var htmlToAdd = '<div class="task__status task__status_todo"></div>' +
  '<span class="task__name">' + todo + '</span>' +
  '<div class="task__delete-button">❌</div>';

newItemElement.innerHTML = htmlToAdd;

// вставка
// https://learn.javascript.ru/modifying-document#добавление-элемента-appendchild-insertbefore
// https://developer.mozilla.org/ru/docs/Web/API/Node/appendChild
// https://developer.mozilla.org/ru/docs/Web/API/Node/insertBefore
listElement.appendChild(newItemElement);
console.log(listElement.children);

listElement.insertBefore(newItemElement, listElement.firstChild);
console.log(listElement.children);


// Задание: добавить несколько тудушек
// listElement.innerHTML = '';
// тут ваш классный код




