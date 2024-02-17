import PropTypes from 'prop-types'

export function ChatMessage({ room, username, message, replayed }) {
  return (
    <div style={{ opacity: replayed ? 0.5 : 1.0 }}>
      {username ? (
        <span>
          <code>[{room}]</code> <b>{username}</b>: {message}
        </span>
      ) : (
        <i>{message}</i>
      )}
    </div>
  )
}

ChatMessage.propTypes = {
  username: PropTypes.string,
  message: PropTypes.string.isRequired,
  replayed: PropTypes.bool,
  room: PropTypes.string,
}
