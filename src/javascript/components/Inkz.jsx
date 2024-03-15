import React, {useState, useEffect} from 'react'

export default function Inkz() {
  const [masters, setMasters] = useState([])
  const [tattoos, setTattoos] = useState([])
  const url = 'http://localhost:2000'

  useEffect(() => {
    fetchData(`${url}/api/v1/masters.json`, setMasters)
    fetchData(`${url}/api/v1/tattoos.json`, setTattoos)
  }, [])

  async function fetchData(apiEndpoint, setter) {
    try {
      const response = await fetch(apiEndpoint)
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)
      const data = await response.json()
      setter(data)
    } catch (error) {
      console.error(`Error fetching data for ${apiEndpoint}:`, error)
    }
  }

  return (
    <main className="w-2/3 mx-auto mt-20 space-y-20 font-sans">
      <div>
        <h2 className="text-3xl text-neutral-700">Masters</h2>
        <div className="grid grid-cols-5 gap-5 mt-5">
          {masters.map((item, index) => (
            <div key={index} className="w-full p-4 border rounded border-neutral-700">
              {item.tattoo_image && <img src={item.tattoo_image} alt="Tattoo Image" className="object-cover w-full h-auto mb-2" />}
              <h2 className="text-xl font-semibold leading-none">{item.name}</h2>
              <p className="mt-3 text-neutral-700">Nickname: {item.nickname}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl text-neutral-700">Tattoos</h2>
        <div className="grid grid-cols-5 gap-5 mt-5">
          {tattoos.map((item, index) => (
            <div key={index} className="w-full p-4 border rounded border-neutral-700">
              <h2 className="text-xl font-semibold leading-none">{item.title}</h2>
              <p className="mt-3 text-neutral-700">Specialization: {item.specialization}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
