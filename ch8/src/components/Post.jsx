import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import slug from 'slug'

import User from './User.jsx'

export default function Post({
  title,
  contents,
  author,
  _id,
  fullPost = false,
}) {
  return (
    <div>
      {fullPost ? (
        <h3>{title}</h3>
      ) : (
        <Link to={`/posts/${_id}/${slug(title)}`}>
          <h3>{title}</h3>
        </Link>
      )}
      {fullPost && <div>{contents}</div>}
      {author && (
        <i>
          {fullPost && <br />}
          Written by <User id={author} />
        </i>
      )}
    </div>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  contents: PropTypes.string,
  author: PropTypes.string,
  _id: PropTypes.string.isRequired,
  fullPost: PropTypes.bool.isRequired,
}
