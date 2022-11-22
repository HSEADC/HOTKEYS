import './index.css'

// index.html shortcut animation change

const texts = ['ctrl+f', 'cmd+c', 'ctrl+v', 'cmd+a', 'cmd+z', 'cmd+s', 'cmd+d']
const textElement = document.querySelector('.shortcut-text')

function changeText(idx) {
   textElement.innerText = texts[idx]

   setTimeout(() => {
      if (idx + 1 === texts.length) {
         changeText(0)
         return
      }

      changeText(idx + 1)
   }, 500) // 1 second
}

changeText(0)

// index.html form script

var form = document.getElementById('email')

async function handleSubmit(event) {
   event.preventDefault()
   var status = document.getElementById('email-form-done')
   var data = new FormData(event.target)
   fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
         Accept: 'application/json'
      }
   })
      .then((response) => {
         if (response.ok) {
            status.innerHTML = 'e-mail отправлен!'
            form.reset()
         } else {
            response.json().then((data) => {
               if (Object.hasOwn(data, 'errors')) {
                  status.innerHTML = data['errors'].map((error) => error['message']).join(', ')
               } else {
                  status.innerHTML = 'ошибка'
               }
            })
         }
      })
      .catch((error) => {
         status.innerHTML = 'ошибка'
      })
}
form.addEventListener('submit', handleSubmit)
