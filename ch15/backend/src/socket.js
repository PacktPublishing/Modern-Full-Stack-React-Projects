import jwt from 'jsonwebtoken'
import { getUserInfoById } from './services/users.js'
import {
  joinRoom,
  sendPublicMessage,
  getUserInfoBySocketId,
} from './services/chat.js'

export function handleSocket(io) {
  io.on('connection', (socket) => {
    joinRoom(io, socket, { room: 'public' })

    socket.on('chat.message', (room, message) =>
      sendPublicMessage(io, { username: socket.user.username, room, message }),
    )

    socket.on('chat.join', (room) => joinRoom(io, socket, { room }))

    socket.on('user.info', async (socketId, callback) =>
      callback(await getUserInfoBySocketId(io, socketId)),
    )
  })

  io.use((socket, next) => {
    if (!socket.handshake.auth?.token) {
      return next(new Error('Authentication failed: no token provided'))
    }
    jwt.verify(
      socket.handshake.auth.token,
      process.env.JWT_SECRET,
      async (err, decodedToken) => {
        if (err) {
          return next(new Error('Authentication failed: invalid token'))
        }
        socket.auth = decodedToken
        socket.user = await getUserInfoById(socket.auth.sub)
        return next()
      },
    )
  })
}
