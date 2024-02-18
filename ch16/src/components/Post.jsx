import PropTypes from 'prop-types'
import Link from 'next/link'

export function Post({ _id, title, author }) {
  return (
    <article>
      <h3>
        <Link href={`/posts/${_id}`}>{title}</Link>
      </h3>
      <em>
        Written by <strong>{author.username}</strong>
      </em>
    </article>
  )
}

Post.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
  contents: PropTypes.string,
}
