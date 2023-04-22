import React from 'react'
import PropTypes from 'prop-types'

import Post from './Post'

export default function PostList({ posts = [] }) {
  return (
    <div>
      {posts.map((post, index) => (
        <React.Fragment key={`post-${index}`}>
          <Post {...post} />
          <hr />
        </React.Fragment>
      ))}
    </div>
  )
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(Post.propTypes).isRequired,
}
