import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { createServer } from 'node:http'
import { Server } from 'socket.io'
import { userRoutes } from './routes/users.js'
import { handleSocket } from './socket.js'

const app = express()
app.use(cors())
app.use(bodyParser.json())

userRoutes(app)

app.get('/', (req, res) => {
  res.send('Hello World from Express!')
})

const server = createServer(app)

const io = new Server(server, {
  cors: {
    origin: '*',
  },
})
handleSocket(io)

export { server as app }
