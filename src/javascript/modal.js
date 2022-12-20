// Show the modal window after 15 seconds
setTimeout(function () {
  document.querySelector('.modal').style.display = 'block';
}, 5000);

// Hide the modal window when the close button is clicked
document.querySelector('.close-button').addEventListener('click', function () {
  document.querySelector('.modal').style.display = 'none';
});

// Hide the modal window when the 'ESC' key is pressed
document.addEventListener('keydown', function (event) {
  if (event.keyCode === 27) {
    document.querySelector('.modal').style.display = 'none';
  }
});
