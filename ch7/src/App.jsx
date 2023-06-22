import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { createMemoryRouter, RouterProvider } from 'react-router-dom'

import { AuthContextProvider } from './contexts/AuthContext.jsx'
import Blog from './pages/Blog.jsx'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'

const queryClient = new QueryClient()

// const router = createMemoryRouter([
//   {
//     path: '/',
//     element: <Blog />,
//   },
//   {
//     path: '/signup',
//     element: <Signup />,
//   },
//   {
//     path: '/login',
//     element: <Login />,
//   },
// ])

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Blog />
        {/* <RouterProvider router={router} /> */}
      </AuthContextProvider>
    </QueryClientProvider>
  )
}
