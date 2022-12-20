const h1 = document.querySelector('h5');
const h3 = document.querySelector('h6');
const shortcuts = ['Ctrl+F', 'Ctrl+A', 'Ctrl+C', 'Ctrl+V', 'Ctrl+S'];
const shortcutsUse = ['найти', 'выделить', 'скопировать', 'вставить', 'сохранить'];

let keyCombination = shortcuts[0];

h1.innerHTML = `${keyCombination}`;

document.addEventListener('keydown', function (event) {
  event.preventDefault();

  if (event.ctrlKey && event.keyCode == 70) {
    h1.style.color = '#cbfb45';
    h3.innerHTML = `Нажмите <b>${keyCombination}</b> чтобы ${shortcutsUse[0]}`;

    setTimeout(() => {
      keyCombination = shortcuts[1];
      h1.innerHTML = `${keyCombination}`;
      h3.innerHTML = ``;
      h1.style.color = 'white';
    }, 2000);
  } else if (event.ctrlKey && event.keyCode == 65) {
    h1.style.color = '#cbfb45';
    h3.innerHTML = `Нажмите <b>${keyCombination}</b> чтобы ${shortcutsUse[1]}`;

    setTimeout(() => {
      keyCombination = shortcuts[2];
      h1.innerHTML = `${keyCombination}`;
      h3.innerHTML = ``;
      h1.style.color = 'white';
    }, 2000);
  } else if (event.ctrlKey && event.keyCode == 67) {
    h1.style.color = '#cbfb45';
    h3.innerHTML = `Нажмите <b>${keyCombination}</b> чтобы ${shortcutsUse[2]}`;

    setTimeout(() => {
      keyCombination = shortcuts[3];
      h1.innerHTML = `${keyCombination}`;
      h3.innerHTML = ``;
      h1.style.color = 'white';
    }, 2000);
  } else if (event.ctrlKey && event.keyCode == 86) {
    h1.style.color = '#cbfb45';
    h3.innerHTML = `Нажмите <b>${keyCombination}</b> чтобы ${shortcutsUse[3]}`;

    setTimeout(() => {
      keyCombination = shortcuts[4];
      h1.innerHTML = `${keyCombination}`;
      h3.innerHTML = ``;
      h1.style.color = 'white';
    }, 2000);
  } else if (event.ctrlKey && event.keyCode == 83) {
    h1.style.color = '#cbfb45';
    h3.innerHTML = `Нажмите <b>${keyCombination}</b> чтобы ${shortcutsUse[4]}`;

    setTimeout(() => {
      keyCombination = 'Все!';
      h1.innerHTML = `${keyCombination}`;
      h3.innerHTML = ``;
      h1.style.color = '#cbfb45';
    }, 2000);
  }
});
