export function snackBar(textSnackbar, timeout) {
  const snackBar = document.getElementById('SNACKBAR')
  const snackBarElem = snackBar.querySelector('h1')
  snackBarElem.innerHTML = textSnackbar
  snackBar.classList.remove('_Get')
  snackBar.classList.add('_Get')
  setTimeout(() => snackBar.classList.remove('_Get'), timeout)
}
