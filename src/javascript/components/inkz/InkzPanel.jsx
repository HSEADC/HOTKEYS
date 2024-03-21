import React, {useState, useEffect} from 'react'
import Cookies from 'js-cookie'

export default function InkzComponent() {
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userToken, setUserToken] = useState('')

  const [newEmailValue, setNewEmailValue] = useState('')
  const [newPasswordValue, setNewPasswordValue] = useState('')
  const [passwordConfirmationValue, setPasswordConfirmationValue] = useState('')

  const [tattooTitle, setTattooTitle] = useState('')

  const URL = 'http://localhost:2000'
  const SIGN_UP_URL = `${URL}/api/v1/sign_up`
  const SIGN_IN_URL = `${URL}/api/v1/sign_in`
  const SIGN_OUT_URL = `${URL}/api/v1/sign_out`
  const TATTOOS_API_URL = `${URL}/api/v1/tattoos`

  useEffect(() => {
    const storedToken = Cookies.get('jti')
    const storedUserEmail = Cookies.get('email')
    if (storedToken && storedUserEmail) {
      setUserToken(storedToken)
      setUserEmail(storedUserEmail)
    }
  }, [])

  async function handleSignUp(event) {
    event.preventDefault()

    const formData = new FormData()
    formData.append('user[email]', newEmailValue)
    formData.append('user[password]', newPasswordValue)
    formData.append('user[password_confirmation]', passwordConfirmationValue)

    try {
      const response = await fetch(SIGN_UP_URL, {
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
        Cookies.set('email', email)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  async function handleSignIn(event) {
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
        Cookies.set('email', email)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  async function handleSignOut(event) {
    event.preventDefault()

    try {
      const response = await fetch(SIGN_OUT_URL, {
        method: 'POST',
        headers: {
          Authorization: userToken,
        },
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      Cookies.remove('jti')
      Cookies.remove('email')
      setUserEmail('')
      setUserToken('')
    } catch (error) {
      console.error('Error:', error)
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
          Authorization: userToken,
        },
        body: formData,
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      } else {
        setTattooTitle('')
      }
    } catch (error) {
      console.error('Error creating tattoo:', error)
    }
  }

  return (
    <>
      <header className="flex gap-5 mx-auto mt-10 w-fit">
        <div className="px-4 py-2 mx-auto border-2 w-fit border-neutral-700">Email: {userEmail}</div>
        <div className="px-4 py-2 mx-auto border-2 w-fit border-neutral-700">{userToken}</div>

        {userToken && (
          <button className="px-4 py-2 text-black bg-white" onClick={handleSignOut}>
            Sign out
          </button>
        )}
      </header>

      {!userToken && (
        <div className="flex justify-center gap-14 mt-14">
          <form className="space-y-5" onSubmit={handleSignUp} acceptCharset="UTF-8">
            <div className="flex justify-between gap-5">
              <label htmlFor="user_email">электронная почта</label>
              <input className="text-black placeholder:text-black" value={newEmailValue} onChange={(event) => setNewEmailValue(event.target.value)} autoFocus autoComplete="email" type="email" name="sign_up[email]" id="new_user_email" />
            </div>

            <div className="flex justify-between gap-5">
              <input autoComplete="new-password" type="password" value={newPasswordValue} onChange={(event) => setNewPasswordValue(event.target.value)} name="sign_up[password]" id="new_user_password" aria-autocomplete="list" placeholder="пароль" className="h-[2rem]" />
              <input autoComplete="new-password" type="password" value={passwordConfirmationValue} onChange={(event) => setPasswordConfirmationValue(event.target.value)} name="sign_up[password_confirmation]" id="user_password_confirmation" placeholder="подверждение пароля" />
            </div>

            <input className="w-full py-2 text-white bg-neutral-700" type="submit" name="commit" value="Sign up" data-disable-with="Sign up" />
          </form>

          <form className="space-y-5" onSubmit={handleSignIn} acceptCharset="UTF-8">
            <div className="flex justify-between gap-5">
              <label htmlFor="user_email">электронная почта</label>
              <input className="text-black placeholder:text-black" value={emailValue} onChange={(event) => setEmailValue(event.target.value)} autoFocus autoComplete="email" type="email" name="sign_in[email]" id="user_email" />
            </div>

            <div className="flex justify-between gap-5">
              <label htmlFor="user_password">пароль</label>
              <input className="text-black placeholder:text-black" value={passwordValue} onChange={(event) => setPasswordValue(event.target.value)} autoComplete="current-password" type="password" name="sign_in[password]" id="user_password" />
            </div>

            <input className="w-full py-2 text-black bg-white" type="submit" name="commit" value="Sign in" data-disable-with="Sign in" />
          </form>
        </div>
      )}

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
