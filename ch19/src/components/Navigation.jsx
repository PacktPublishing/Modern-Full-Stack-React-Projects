import Link from 'next/link'
import PropTypes from 'prop-types'

export function UserBar({ username, logoutAction }) {
  return (
    <form action={logoutAction}>
      <Link href='/create'>Create Post</Link> | Logged in as{' '}
      <strong>{username}</strong> <button>Logout</button>
    </form>
  )
}

UserBar.propTypes = {
  username: PropTypes.string.isRequired,
  logoutAction: PropTypes.func.isRequired,
}

export function LoginSignupLinks() {
  return (
    <div>
      <Link href='/login'>Log In</Link> | <Link href='/signup'>Sign Up</Link>
    </div>
  )
}

export function Navigation({ username, logoutAction }) {
  return (
    <>
      <Link href='/'>Home</Link>
      {username ? (
        <UserBar username={username} logoutAction={logoutAction} />
      ) : (
        <LoginSignupLinks />
      )}
    </>
  )
}

Navigation.propTypes = {
  username: PropTypes.string,
  logoutAction: PropTypes.func.isRequired,
}
