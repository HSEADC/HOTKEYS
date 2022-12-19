var h1 = document.querySelector('h5');
var h3 = document.querySelector('h6');
var shortcuts = ['Ctrl+F', 'Ctrl+A', 'Ctrl+C', 'Ctrl+V', 'Ctrl+S'];
var shortcutsUse = ['найти', 'выделить', 'скопировать', 'вставить', 'сохранить'];
var keyCombination = shortcuts[0];
h1.innerHTML = "".concat(keyCombination);
document.addEventListener('keydown', function (event) {
  event.preventDefault();

  if (event.ctrlKey && event.keyCode == 70) {
    h1.style.color = '#cbfb45';
    h3.innerHTML = "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 <b>".concat(keyCombination, "</b> \u0447\u0442\u043E\u0431\u044B ").concat(shortcutsUse[0]);
    setTimeout(function () {
      keyCombination = shortcuts[1];
      h1.innerHTML = "".concat(keyCombination);
      h3.innerHTML = "";
      h1.style.color = 'white';
    }, 2000);
  } else if (event.ctrlKey && event.keyCode == 65) {
    h1.style.color = '#cbfb45';
    h3.innerHTML = "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 <b>".concat(keyCombination, "</b> \u0447\u0442\u043E\u0431\u044B ").concat(shortcutsUse[1]);
    setTimeout(function () {
      keyCombination = shortcuts[2];
      h1.innerHTML = "".concat(keyCombination);
      h3.innerHTML = "";
      h1.style.color = 'white';
    }, 2000);
  } else if (event.ctrlKey && event.keyCode == 67) {
    h1.style.color = '#cbfb45';
    h3.innerHTML = "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 <b>".concat(keyCombination, "</b> \u0447\u0442\u043E\u0431\u044B ").concat(shortcutsUse[2]);
    setTimeout(function () {
      keyCombination = shortcuts[3];
      h1.innerHTML = "".concat(keyCombination);
      h3.innerHTML = "";
      h1.style.color = 'white';
    }, 2000);
  } else if (event.ctrlKey && event.keyCode == 86) {
    h1.style.color = '#cbfb45';
    h3.innerHTML = "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 <b>".concat(keyCombination, "</b> \u0447\u0442\u043E\u0431\u044B ").concat(shortcutsUse[3]);
    setTimeout(function () {
      keyCombination = shortcuts[4];
      h1.innerHTML = "".concat(keyCombination);
      h3.innerHTML = "";
      h1.style.color = 'white';
    }, 2000);
  } else if (event.ctrlKey && event.keyCode == 83) {
    h1.style.color = '#cbfb45';
    h3.innerHTML = "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 <b>".concat(keyCombination, "</b> \u0447\u0442\u043E\u0431\u044B ").concat(shortcutsUse[4]);
    setTimeout(function () {
      keyCombination = 'Все!';
      h1.innerHTML = "".concat(keyCombination);
      h3.innerHTML = "";
      h1.style.color = '#cbfb45';
    }, 2000);
  }
});