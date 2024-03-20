import React, {useState, useEffect} from 'react'

export default function InkzAuth() {
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  const [userEmail, setUserEmail] = useState('')
  const [userToken, setUserToken] = useState('')

  const SIGN_IN_URL = 'http://localhost:2000/api/v1/sign_in'

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail')
    if (storedEmail) {
      setUserEmail(storedEmail)
    }

    const storedToken = localStorage.getItem('token')
    if (storedToken) {
      setUserToken(storedToken)
    }
  }, [])

  async function handleSubmit(event) {
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

        const userEmail = responseData.data.user.email
        localStorage.setItem('userEmail', userEmail)
        setUserEmail(userEmail)

        const userToken = responseData.data.user.jti
        localStorage.setItem('token', userToken)
        setUserToken(userToken)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <>
      <header className="flex gap-5 mx-auto mt-10 w-fit">
        <div className="px-4 py-2 mx-auto border-2 w-fit border-neutral-700">Email: {userEmail}</div>
        <div className="px-4 py-2 mx-auto border-2 w-fit border-neutral-700">{userToken}</div>

        <button className="px-4 py-2 text-black bg-white">Log out</button>
      </header>

      <form className="mx-auto space-y-5 w-fit mt-14" onSubmit={handleSubmit} acceptCharset="UTF-8">
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
    </>
  )
}
