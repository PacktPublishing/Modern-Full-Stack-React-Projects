import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet'

import Header from '../components/Header.jsx'
import Post from '../components/Post.jsx'
import { getPostById } from '../api/posts.js'

export default function ViewPost({ postId }) {
  const postQuery = useQuery({
    queryKey: ['post', postId],
    queryFn: () => getPostById(postId),
  })
  const post = postQuery.data

  return (
    <div style={{ padding: 8 }}>
      <Helmet>
        <title>{post ? `${post.title} |` : ''} Full-Stack React Blog</title>
      </Helmet>
      <Header />
      <br />
      <hr />
      <Link to='/'>Back to main page</Link>
      <br />
      <hr />
      {post ? <Post {...post} fullPost /> : `Post with id ${postId} not found.`}
    </div>
  )
}

ViewPost.propTypes = {
  postId: PropTypes.string.isRequired,
}
