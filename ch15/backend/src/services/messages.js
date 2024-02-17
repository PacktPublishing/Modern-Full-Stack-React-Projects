import { Message } from '../db/models/message.js'

export async function createMessage({ username, message, room }) {
  const messageDoc = new Message({ username, message, room })
  return await messageDoc.save()
}

export async function getMessagesByRoom(room) {
  return await Message.find({ room }).sort({ sent: 1 })
}
