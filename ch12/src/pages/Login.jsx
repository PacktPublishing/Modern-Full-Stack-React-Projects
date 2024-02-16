import { useState } from 'react'
import { useMutation as useGraphQLMutation } from '@apollo/client/react/index.js'
import { useNavigate, Link } from 'react-router-dom'
import { LOGIN_USER } from '../api/graphql/users.js'
import { useAuth } from '../contexts/AuthContext.jsx'

export function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const [, setToken] = useAuth()

  const [loginUser, { loading }] = useGraphQLMutation(LOGIN_USER, {
    variables: { username, password },
    onCompleted: (data) => {
      setToken(data.loginUser)
      navigate('/')
    },
    onError: () => alert('failed to login!'),
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    loginUser()
  }

  return (
    <form onSubmit={handleSubmit}>
      <Link to='/'>Back to main page</Link>
      <hr />
      <br />
      <div>
        <label htmlFor='create-username'>Username: </label>
        <input
          type='text'
          name='create-username'
          id='create-username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <br />
      <div>
        <label htmlFor='create-password'>Password: </label>
        <input
          type='password'
          name='create-password'
          id='create-password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br />
      <input
        type='submit'
        value={loading ? 'Logging in...' : 'Log In'}
        disabled={!username || !password || loading}
      />
    </form>
  )
}
