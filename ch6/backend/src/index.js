import dotenv from 'dotenv'
dotenv.config()

import { app } from './app.js'
import { initDatabase } from './db/init.js'

try {
  await initDatabase()
  const PORT = process.env.PORT
  app.listen(PORT)
  console.info(`express server running on http://localhost:${PORT}`)
} catch (err) {
  console.error('error connecting to database:', err)
}
