import PropTypes from 'prop-types'

export function User({ username }) {
  return <b>{username}</b>
}

User.propTypes = {
  username: PropTypes.string.isRequired,
}
