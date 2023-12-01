document.addEventListener('DOMContentLoaded', function () {
  // Fetch data from the first API
  fetchData('http://localhost:1000/api/v1/masters.json', ['name', 'nickname'], 'result')

  // Fetch data from the second API
  fetchData('http://localhost:1000/api/v1/tattoos.json', ['title', 'description'], 'tattoosResult')

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
      card.className = 'p-4 rounded w-fit border border-purple-500'

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
