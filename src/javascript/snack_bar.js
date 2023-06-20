export function snackBar(textSnackbar, timeout) {
  const snackBar = document.getElementById('SNACKBAR')
  snackBar.innerHTML = textSnackbar
  snackBar.classList.remove('_Get')
  snackBar.classList.add('_Get')
  setTimeout(() => snackBar.classList.remove('_Get'), timeout)
}
