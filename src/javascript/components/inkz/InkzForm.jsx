import React, {useState, useEffect} from 'react'

export default function InkzForm() {
  const [tattooTitle, setTattooTitle] = useState('')
  const [jti, setJti] = useState('')

  const TATTOOS_API_URL = 'http://localhost:2000/api/v1/tattoos'

  useEffect(() => {
    fetchData(TATTOOS_API_URL)
  }, [])

  async function fetchData(apiEndpoint) {
    try {
      const response = await fetch(apiEndpoint)
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)
      const data = await response.json()

      setJti(data.jti)
    } catch (error) {
      console.error(`Error fetching data for ${apiEndpoint}:`, error)
    }
  }

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const formData = new FormData()
      formData.append('tattoo[title]', tattooTitle)
      formData.append('tattoo[master_id]', '1')
      formData.append('tattoo[tattoo_image]', event.target.elements['tattoo[tattoo_image]'].files[0])

      const response = await fetch(TATTOOS_API_URL, {
        method: 'POST',
        headers: {
          Authorization: jti,
        },
        body: formData,
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      } else {
        console.log('Tattoo created successfully!')
        setTattooTitle('')
      }
    } catch (error) {
      console.log('Error creating tattoo! Look in console')
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
        <input className="form-control" type="file" name="tattoo[tattoo_image]" id="tattoo_tattoo_image" />
      </div>

      <div>
        <input className="w-full py-2 text-black bg-white" type="submit" name="commit" value="Создать Tattoo" data-disable-with="Создать Tattoo" />
      </div>
    </form>
  )
}
