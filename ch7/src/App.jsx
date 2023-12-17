import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import PropTypes from 'prop-types'
import { AuthContextProvider } from './contexts/AuthContext.jsx'

const queryClient = new QueryClient()

export function App({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>{children}</AuthContextProvider>
    </QueryClientProvider>
  )
}

App.propTypes = {
  children: PropTypes.element.isRequired,
}
