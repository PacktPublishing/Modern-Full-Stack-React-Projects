import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import { postsRoutes } from './routes/posts.js'
import { userRoutes } from './routes/users.js'

const app = express()
app.use(cors())
app.use(bodyParser.json())

postsRoutes(app)
userRoutes(app)

app.get('/', (req, res) => {
  res.send('Hello World from Express!')
})

export { app }
