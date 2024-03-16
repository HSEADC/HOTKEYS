import React, {useState, useEffect} from 'react'

export default function InkzForm() {
  const [createUrl, setCreateUrl] = useState('')
  const url = 'http://localhost:2000'

  useEffect(() => {
    fetchData(`${url}/api/v1/tattoos.json`)
  }, [])

  async function fetchData(apiEndpoint) {
    try {
      const response = await fetch(apiEndpoint)
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)
      const data = await response.json()
      setCreateUrl(data.create_url)
    } catch (error) {
      console.error(`Error fetching data for ${apiEndpoint}:`, error)
    }
  }

  return (
    <form className="mx-auto space-y-5 w-fit mt-14" encType="multipart/form-data" action={createUrl} acceptCharset="UTF-8" method="post">
      <div className="flex justify-between gap-5">
        <label htmlFor="tattoo_title">Title</label>
        <input className="w-[60%] text-black placeholder:text-black" type="text" name="tattoo[title]" id="tattoo_title" />
      </div>

      <div>
        <input className="w-full py-2 text-black bg-white" type="submit" name="commit" value="Создать Tattoo" data-disable-with="Создать Tattoo" />
      </div>
    </form>
  )
}
