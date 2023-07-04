import { useLoaderData } from 'react-router-dom'
import { QueryClient, dehydrate, Hydrate } from '@tanstack/react-query'

import Blog from './pages/Blog.jsx'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import ViewPost from './pages/ViewPost.jsx'
import { getPosts, getPostById } from './api/posts.js'
import { getUserInfo } from './api/users.js'

export default [
  {
    path: '/',
    loader: async () => {
      const queryClient = new QueryClient()

      const author = ''
      const sortBy = 'createdAt'
      const sortOrder = 'descending'
      const posts = await getPosts({ author, sortBy, sortOrder })
      await queryClient.prefetchQuery(
        ['posts', { author, sortBy, sortOrder }],
        () => posts,
      )

      const uniqueAuthors = posts
        .map((post) => post.author)
        .filter((value, index, array) => array.indexOf(value) === index)

      for (const userId of uniqueAuthors) {
        await queryClient.prefetchQuery(['users', userId], () =>
          getUserInfo(userId),
        )
      }

      return dehydrate(queryClient)
    },
    Component() {
      const dehydratedState = useLoaderData()
      return (
        <Hydrate state={dehydratedState}>
          <Blog />
        </Hydrate>
      )
    },
  },
  {
    path: '/posts/:postId/:slug?',
    loader: async ({ params }) => {
      const postId = params.postId

      const queryClient = new QueryClient()

      const post = await getPostById(postId)
      await queryClient.prefetchQuery(['post', postId], () => post)

      if (post?.author) {
        await queryClient.prefetchQuery(['users', post.author], () =>
          getUserInfo(post.author),
        )
      }

      return { dehydratedState: dehydrate(queryClient), postId }
    },
    Component() {
      const { dehydratedState, postId } = useLoaderData()
      return (
        <Hydrate state={dehydratedState}>
          <ViewPost postId={postId} />
        </Hydrate>
      )
    },
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]
