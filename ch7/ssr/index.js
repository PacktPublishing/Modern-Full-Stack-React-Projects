import fs from 'fs'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

import App from '../src/App.jsx'

const app = express()

app.get('/', async (req, res) => {
  const app = ReactDOMServer.renderToString(React.createElement(App))
  const template = await fs.promises.readFile('./index.html')
  return res.send(
    template
      .toString()
      .replace('<div id="root"></div>', `<div id="root">${app}</div>`),
  )
})

app.use(express.static('./public'))

app.listen(process.env.PORT, () => {
  console.log(`SSR server running on http://localhost:${process.env.PORT}`)
})
