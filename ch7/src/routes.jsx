import Blog from './pages/Blog.jsx'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'

export default [
  {
    path: '/',
    element: <Blog />,
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
