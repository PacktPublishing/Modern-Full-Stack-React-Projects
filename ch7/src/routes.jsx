import { useLoaderData } from 'react-router-dom'
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from '@tanstack/react-query'
import { Blog } from './pages/Blog.jsx'
import { Signup } from './pages/Signup.jsx'
import { Login } from './pages/Login.jsx'
import { getPosts } from './api/posts.js'
import { getUserInfo } from './api/users.js'

export const routes = [
  {
    path: '/',
    loader: async () => {
      const queryClient = new QueryClient()
      const author = ''
      const sortBy = 'createdAt'
      const sortOrder = 'descending'
      const posts = await getPosts({ author, sortBy, sortOrder })
      await queryClient.prefetchQuery({
        queryKey: ['posts', { author, sortBy, sortOrder }],
        queryFn: () => posts,
      })
      const uniqueAuthors = posts
        .map((post) => post.author)
        .filter((value, index, array) => array.indexOf(value) === index)
      for (const userId of uniqueAuthors) {
        await queryClient.prefetchQuery({
          queryKey: ['users', userId],
          queryFn: () => getUserInfo(userId),
        })
      }
      return dehydrate(queryClient)
    },
    Component() {
      const dehydratedState = useLoaderData()
      return (
        <HydrationBoundary state={dehydratedState}>
          <Blog />
        </HydrationBoundary>
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
