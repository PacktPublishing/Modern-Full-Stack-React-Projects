import PropTypes from 'prop-types'

export default function Post({ title, content, author }) {
  return (
    <div>
      <h3>{title}</h3>
      <div>{content}</div>
      {author && (
        <i>
          <br />
          Written by <b>{author}</b>
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
