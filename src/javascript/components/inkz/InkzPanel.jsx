import React, {useState, useEffect} from 'react'
import Cookies from 'js-cookie'

export default function InkzComponent() {
  // InkzAuth State
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userToken, setUserToken] = useState('')

  // InkzForm State
  const [tattooTitle, setTattooTitle] = useState('')

  const SIGN_IN_URL = 'http://localhost:2000/api/v1/sign_in'
  const TATTOOS_API_URL = 'http://localhost:2000/api/v1/tattoos'

  useEffect(() => {
    const storedToken = Cookies.get('jti')
    const storedUserEmail = Cookies.get('user')
    if (storedToken && storedUserEmail) {
      setUserToken(storedToken)
      setUserEmail(storedUserEmail)
    }
  }, [])

  async function handleLogin(event) {
    event.preventDefault()

    const formData = new FormData()
    formData.append('sign_in[email]', emailValue)
    formData.append('sign_in[password]', passwordValue)

    try {
      const response = await fetch(SIGN_IN_URL, {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      } else {
        const responseData = await response.json()

        const {email, jti: token} = responseData.data.user
        setUserEmail(email)
        setUserToken(token)

        Cookies.set('jti', token)
        Cookies.set('user', email)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  function handleLogout() {
    Cookies.remove('jti')
    Cookies.remove('user')
    setUserEmail('')
    setUserToken('')
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
          Authorization: userToken,
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
    <>
      <header className="flex gap-5 mx-auto mt-10 w-fit">
        <div className="px-4 py-2 mx-auto border-2 w-fit border-neutral-700">Email: {userEmail}</div>
        <div className="px-4 py-2 mx-auto border-2 w-fit border-neutral-700">{userToken}</div>

        <button className="px-4 py-2 text-black bg-white" onClick={handleLogout}>
          Delete Cookies
        </button>
      </header>

      <form className="mx-auto space-y-5 w-fit mt-14" onSubmit={handleLogin} acceptCharset="UTF-8">
        <div className="flex justify-between gap-5">
          <label htmlFor="user_email">электронная почта</label>
          <input className="text-black placeholder:text-black" value={emailValue} onChange={(event) => setEmailValue(event.target.value)} autoFocus autoComplete="email" type="email" name="sign_in[email]" id="user_email" />
        </div>

        <div className="flex justify-between gap-5">
          <label htmlFor="user_password">пароль</label>
          <input className="text-black placeholder:text-black" value={passwordValue} onChange={(event) => setPasswordValue(event.target.value)} autoComplete="current-password" type="password" name="sign_in[password]" id="user_password" />
        </div>

        <div className="actions">
          <input className="w-full py-2 text-black bg-white" type="submit" name="commit" value="Log in" data-disable-with="Log in" />
        </div>
      </form>

      {userToken && (
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
      )}
    </>
  )
}
