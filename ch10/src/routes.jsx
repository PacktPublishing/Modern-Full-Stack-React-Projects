import { useLoaderData } from 'react-router-dom'
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from '@tanstack/react-query'
import { Blog } from './pages/Blog.jsx'
import { Signup } from './pages/Signup.jsx'
import { Login } from './pages/Login.jsx'
import { ViewPost } from './pages/ViewPost.jsx'
import { getPosts, getPostById } from './api/posts.js'
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
  {
    path: '/posts/:postId/:slug?',
    loader: async ({ params }) => {
      const postId = params.postId

      const queryClient = new QueryClient()

      const post = await getPostById(postId)
      await queryClient.prefetchQuery({
        queryKey: ['post', postId],
        queryFn: () => post,
      })

      if (post?.author) {
        await queryClient.prefetchQuery({
          queryKey: ['users', post.author],
          queryFn: () => getUserInfo(post.author),
        })
      }

      return { dehydratedState: dehydrate(queryClient), postId }
    },
    Component() {
      const { dehydratedState, postId } = useLoaderData()
      return (
        <HydrationBoundary state={dehydratedState}>
          <ViewPost postId={postId} />
        </HydrationBoundary>
      )
    },
  },
]
