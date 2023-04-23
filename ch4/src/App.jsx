import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Blog from './Blog.jsx'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Blog />
    </QueryClientProvider>
  )
}
