import React, {useState, useEffect} from 'react'

export default function InkzForm() {
  const [createUrl, setCreateUrl] = useState('')
  const [tattooTitle, setTattooTitle] = useState('')
  const [jti, setJti] = useState('')

  const url = 'http://localhost:2000'

  useEffect(() => {
    fetchData(`${url}/api/v1/tattoos.json`)
  }, [])

  async function fetchData(apiEndpoint) {
    try {
      const response = await fetch(apiEndpoint)
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)
      const data = await response.json()

      setJti(data.jti)
      setCreateUrl(data.create_url)
    } catch (error) {
      console.error(`Error fetching data for ${apiEndpoint}:`, error)
    }
  }

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const response = await fetch(createUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: jti,
        },
        body: JSON.stringify({tattoo: {title: tattooTitle, master_id: '1'}}),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      } else {
        alert('Tattoo created successfully!')
        setTattooTitle('')
      }
    } catch (error) {
      alert('Error creating tattoo! Look in console')
      console.error('Error creating tattoo:', error)
    }
  }

  return (
    <form className="mx-auto space-y-5 w-fit mt-14" onSubmit={handleSubmit} acceptCharset="UTF-8">
      <div className="flex justify-between gap-5">
        <label htmlFor="tattoo_title">Title</label>
        <input className="w-[60%] text-black placeholder:text-black" type="text" name="tattoo[title]" id="tattoo_title" value={tattooTitle} onChange={(event) => setTattooTitle(event.target.value)} />
      </div>

      <div>
        <input className="w-full py-2 text-black bg-white" type="submit" name="commit" value="Создать Tattoo" data-disable-with="Создать Tattoo" />
      </div>
    </form>
  )
}
