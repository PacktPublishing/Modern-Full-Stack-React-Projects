import express from 'express'
import bodyParser from 'body-parser'

import postRoutes from './routes/posts.js'

const app = express()

app.use(bodyParser.json())

postRoutes(app)

app.get('/', (req, res) => {
  res.send('Hello World from Express!')
})

export default app
