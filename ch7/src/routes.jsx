import { useLoaderData } from 'react-router-dom'
import { QueryClient, dehydrate, Hydrate } from '@tanstack/react-query'

import Blog from './pages/Blog.jsx'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import { getPosts } from './api/posts.js'
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
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]