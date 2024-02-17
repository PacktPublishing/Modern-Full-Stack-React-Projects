import mongoose, { Schema } from 'mongoose'

const messageSchema = new Schema({
  username: { type: String, required: true },
  message: { type: String, required: true },
  room: { type: String, required: true },
  sent: { type: Date, expires: 5 * 60, default: Date.now, required: true },
})

export const Message = mongoose.model('message', messageSchema)
