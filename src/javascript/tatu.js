document.addEventListener('DOMContentLoaded', function () {
  url = 'http://localhost:1000'
  // Fetch data from the first API
  fetchData(`${url}/api/v1/masters.json`, ['name', 'nickname'], 'result')

  // Fetch data from the second API
  fetchData(`${url}/api/v1/tattoos.json`, ['title', 'specialization'], 'tattoosResult')

  function fetchData(apiEndpoint, propertiesToDisplay, resultDivId) {
    const resultDiv = document.getElementById(resultDivId)
    resultDiv.innerHTML = '<div class="mt-10 w-10 h-10 bg-purple-500 animate-spin"></div>'
    fetch(apiEndpoint)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
      })
      .then((data) => {
        displayData(data, propertiesToDisplay, resultDivId)
        console.log(data)
      })
      .catch((error) => {
        console.error(error)
        resultDiv.innerHTML = '<div class="mt-10 text-lg error animate-bounce">Error loading data</div>'
      })
  }

  function displayData(data, propertiesToDisplay, resultDivId) {
    const resultDiv = document.getElementById(resultDivId)
    resultDiv.innerHTML = ''
    resultDiv.className = 'flex flex-wrap gap-5 mt-10'

    data.forEach((item) => {
      const card = document.createElement('div')
      card.className = 'p-4 rounded border border-purple-500 w-[47%]'

      if (item.tattoo_image && item.tattoo_image.url) {
        const imageElement = document.createElement('img')
        imageElement.src = url + item.tattoo_image.url
        imageElement.alt = 'Tattoo Image'
        imageElement.className = 'w-full object-cover h-auto mb-2'
        card.appendChild(imageElement)
      }

      propertiesToDisplay.forEach((property) => {
        const element = document.createElement(property === 'name' || property === 'title' ? 'h2' : 'p')
        element.className = property === 'name' || property === 'title' ? 'text-lg font-semibold mb-2' : 'text-purple-700'
        element.textContent = property === 'name' || property === 'title' ? item[property] : `${property.charAt(0).toUpperCase() + property.slice(1)}: ${item[property]}`
        card.appendChild(element)
      })

      resultDiv.appendChild(card)
    })
  }
})
