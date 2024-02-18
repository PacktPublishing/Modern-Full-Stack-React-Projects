'use client'
import { useFormState } from 'react-dom'
import PropTypes from 'prop-types'

export function Login({ loginAction }) {
  const [state, formAction] = useFormState(loginAction, {})
  return (
    <form action={formAction}>
      <div>
        <label htmlFor='username'>Username: </label>
        <input type='text' name='username' id='username' />
      </div>
      <br />
      <div>
        <label htmlFor='password'>Password: </label>
        <input type='password' name='password' id='password' />
      </div>
      <br />
      <input type='submit' value='Log In' />
      {state.error ? <strong> Error logging in: {state.error}</strong> : null}
    </form>
  )
}

Login.propTypes = {
  loginAction: PropTypes.func.isRequired,
}
