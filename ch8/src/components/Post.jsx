import PropTypes from 'prop-types'

import User from './User.jsx'

export default function Post({ title, content, author }) {
  return (
    <div>
      <h3>{title}</h3>
      <div>{content}</div>
      {author && (
        <i>
          <br />
          Written by <User id={author} />
        </i>
      )}
    </div>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  author: PropTypes.string,
}
