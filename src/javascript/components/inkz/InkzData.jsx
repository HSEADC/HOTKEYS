import React, {useState, useEffect} from 'react'

export default function InkzData() {
  const [masters, setMasters] = useState([])
  const [tattoos, setTattoos] = useState([])
  const url = 'http://localhost:2000'

  useEffect(() => {
    const fetchData = async (apiEndpoint, setter) => {
      try {
        const response = await fetch(apiEndpoint)
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)
        const data = await response.json()
        setter(data.tattoos || data)
      } catch (error) {
        console.error(`Error fetching data:`, error)
      }
    }

    fetchData(`${url}/api/v1/masters.json`, setMasters)
    fetchData(`${url}/api/v1/tattoos.json`, setTattoos)
  }, [])

  return (
    <main className="w-2/3 mx-auto space-y-20 font-sans">
      <div>
        <h2 className="text-3xl text-neutral-700">Masters</h2>
        <div className="grid grid-cols-5 gap-5 mt-5">
          {masters.map((item, index) => (
            <div key={index} className="w-full p-4 border rounded border-neutral-700">
              <h2 className="text-xl font-semibold leading-none">{item.name}</h2>
              <p className="mt-3 text-neutral-700">Nickname: {item.nickname}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl text-neutral-700">Tattoos</h2>
        <div className="grid grid-cols-7 gap-5 mt-5">
          {tattoos.map((item, index) => (
            <div key={index} className="w-full p-4 border rounded-md border-neutral-700">
              {item.tattoo_image && <img className="object-cover mb-3 rounded-md saturate-[25%] aspect-square" src={item.tattoo_image} alt="Tattoo Image" />}
              <h2 className="text-xl font-semibold">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
