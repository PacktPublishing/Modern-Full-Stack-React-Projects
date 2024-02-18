import Link from 'next/link'
import PropTypes from 'prop-types'

export function UserBar({ username }) {
  return (
    <form>
      <Link href='/create'>Create Post</Link> | Logged in as{' '}
      <strong>{username}</strong> <button>Logout</button>
    </form>
  )
}

UserBar.propTypes = {
  username: PropTypes.string.isRequired,
}

export function LoginSignupLinks() {
  return (
    <div>
      <Link href='/login'>Log In</Link> | <Link href='/signup'>Sign Up</Link>
    </div>
  )
}

export function Navigation({ username }) {
  return (
    <>
      <Link href='/'>Home</Link>
      {username ? <UserBar username={username} /> : <LoginSignupLinks />}
    </>
  )
}

Navigation.propTypes = {
  username: PropTypes.string,
}
