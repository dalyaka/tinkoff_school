var randomButtonElement = document.getElementById('randomize');
var randomUserElement = document.getElementById('user');
var errorElement = document.getElementById('error');


function getUserInfo(data) {
  var user = data[Math.floor(Math.random() * data.length)];
  return loadImage(user.avatar_url, function() {
      hideError();
      drawUser(user)
    });
}

randomButtonElement.onclick = function () {
    fetchData('https://api.github.com/users')
      .then(text => JSON.parse(text))
      .then(data => getUserInfo(data))
      .catch(error => showError(error))
};


var fetchData = (url) => {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            reject(new Error('Ошибка ' + xhr.status));
        } else {
            resolve(xhr.responseText);
        }
    };

    xhr.send();
  })
};

function showError(err) {
    errorElement.textContent = err;
    errorElement.classList.remove('hidden');
    randomUserElement.classList.add('hidden');
}

function hideError() {
    errorElement.classList.add('hidden');
    randomUserElement.classList.remove('hidden');
}


function loadImage(imageUrl, successCallback, errorCallback) {
    var img = new Image();

    img.onload = function () {
        successCallback(img);
    };

    img.onerror = function () {
        errorCallback(new Error('Что-то пошло не так'));
    };
    img.src = imageUrl;
}

function drawUser(data) {
    var img = randomUserElement.querySelector('img');
    var link = randomUserElement.querySelector('a');
    img.src = data.avatar_url;
    img.alt = data.login;
    link.href = data.html_url;
    link.textContent = data.login;
}
