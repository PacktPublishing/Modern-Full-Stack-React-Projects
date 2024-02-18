import 'server-only'
import mongoose from 'mongoose'

export async function initDatabase() {
  const connection = await mongoose.connect(process.env.DATABASE_URL)
  return connection
}
