document.addEventListener('DOMContentLoaded', function () {
  fetch('http://localhost:1000/api/v1/masters.json')
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
    })
    .then((data) => {
      displayData(data)
    })
    .catch((error) => {
      console.error(error)
    })

  function displayData(data) {
    const resultDiv = document.getElementById('result')
    resultDiv.className = 'flex flex-wrap gap-5 mt-10'

    data.forEach((item) => {
      const card = document.createElement('div')
      card.className = 'p-4 rounded w-fit border border-purple-500'

      const title = document.createElement('h2')
      title.className = 'text-lg font-semibold mb-2'
      title.textContent = item.name

      const nickname = document.createElement('p')
      nickname.className = 'text-purple-700'
      nickname.textContent = `Nickname: ${item.nickname}`

      card.appendChild(title)
      card.appendChild(nickname)

      resultDiv.appendChild(card)
    })
  }
})
