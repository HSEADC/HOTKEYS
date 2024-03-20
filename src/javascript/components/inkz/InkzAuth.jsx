import React, {useState} from 'react'

export default function InkzAuth() {
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  const url = 'http://localhost:2000/api/v1/sign_in'

  async function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData()
    formData.append('sign_in[email]', emailValue)
    formData.append('sign_in[password]', passwordValue)

    try {
      const response = await fetch(url, {
        method: 'POST',
        // headers: {
        //   Authorization: jti,
        // },
        body: formData,
      })

      console.log(response)

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      } else {
        console.log(true)
      }
    } catch (error) {
      console.log(false)
      console.error('Error:', error)
    }
  }

  return (
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
  )
}
