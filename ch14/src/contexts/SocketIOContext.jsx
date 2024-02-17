import { createContext, useState, useContext, useEffect } from 'react'
import { io } from 'socket.io-client'
import PropTypes from 'prop-types'
import { useAuth } from './AuthContext.jsx'

export const SocketIOContext = createContext({
  socket: null,
  status: 'waiting',
  error: null,
})

export const SocketIOContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null)
  const [status, setStatus] = useState('waiting')
  const [error, setError] = useState(null)

  const [token] = useAuth()

  useEffect(() => {
    if (token) {
      const socket = io(import.meta.env.VITE_SOCKET_HOST, {
        query: window.location.search.substring(1),
        auth: { token },
      })
      socket.on('connect', () => {
        setStatus('connected')
        setError(null)
      })
      socket.on('connect_error', (err) => {
        setStatus('error')
        setError(err)
      })
      socket.on('disconnect', () => setStatus('disconnected'))
      setSocket(socket)
    }
  }, [token, setSocket, setStatus, setError])

  return (
    <SocketIOContext.Provider value={{ socket, status, error }}>
      {children}
    </SocketIOContext.Provider>
  )
}

SocketIOContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
}

export function useSocket() {
  return useContext(SocketIOContext)
}
