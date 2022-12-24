var h1 = document.querySelector('h5');
var h3 = document.querySelector('h6');
var shortcuts = ['Ctrl+F', 'Ctrl+A', 'Ctrl+C', 'Ctrl+V', 'Ctrl+S'];
var shortcutsMac = ['⌘Cmd+F', '⌘Cmd+A', '⌘Cmd+C', '⌘Cmd+V', '⌘Cmd+S'];
var shortcutsUse = ['Поиск по странице', 'Выделение всего текста', 'Копирование текста', 'Вставка текста', 'Сохранить изменения в окне'];
var keyCombination = shortcuts[0];
h1.innerHTML = "".concat(keyCombination);
document.addEventListener('keydown', function (event) {
  event.preventDefault();

  if (event.ctrlKey && event.keyCode == 70) {
    h1.style.color = '#cbfb45';
    h3.innerHTML = "".concat(shortcutsUse[0]);
    setTimeout(function () {
      keyCombination = shortcuts[1];
      h1.innerHTML = "".concat(keyCombination);
      h3.innerHTML = "";
      h1.style.color = 'white';
    }, 2000);
  } else if (event.ctrlKey && event.keyCode == 65) {
    h1.style.color = '#cbfb45';
    h3.innerHTML = "".concat(shortcutsUse[1]);
    setTimeout(function () {
      keyCombination = shortcuts[2];
      h1.innerHTML = "".concat(keyCombination);
      h3.innerHTML = "";
      h1.style.color = 'white';
    }, 2000);
  } else if (event.ctrlKey && event.keyCode == 67) {
    h1.style.color = '#cbfb45';
    h3.innerHTML = "".concat(shortcutsUse[2]);
    setTimeout(function () {
      keyCombination = shortcuts[3];
      h1.innerHTML = "".concat(keyCombination);
      h3.innerHTML = "";
      h1.style.color = 'white';
    }, 2000);
  } else if (event.ctrlKey && event.keyCode == 86) {
    h1.style.color = '#cbfb45';
    h3.innerHTML = "".concat(shortcutsUse[3]);
    setTimeout(function () {
      keyCombination = shortcuts[4];
      h1.innerHTML = "".concat(keyCombination);
      h3.innerHTML = "";
      h1.style.color = 'white';
    }, 2000);
  } else if (event.ctrlKey && event.keyCode == 83) {
    h1.style.color = '#cbfb45';
    h3.innerHTML = "".concat(shortcutsUse[4]);
    setTimeout(function () {
      keyCombination = 'Все!';
      h1.innerHTML = "".concat(keyCombination);
      h3.innerHTML = "";
      h1.style.color = '#cbfb45';
    }, 2000);
  }
});