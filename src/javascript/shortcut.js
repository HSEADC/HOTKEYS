const texts = ['ctrl+f', 'cmd+c', 'ctrl+v', 'cmd+a', 'cmd+z', 'cmd+s', 'cmd+d'];
const textElement = document.querySelector('.shortcut-text');

function changeText(idx) {
  textElement.innerText = texts[idx];

  setTimeout(() => {
    if (idx + 1 === texts.length) {
      changeText(0);
      return;
    }

    changeText(idx + 1);
  }, 500); // 1 second
}

changeText(0);
