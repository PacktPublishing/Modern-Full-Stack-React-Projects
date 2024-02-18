import 'server-only'
import mongoose, { Schema } from 'mongoose'

const postSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    contents: String,
  },
  { timestamps: true },
)

export const Post = mongoose.models.post ?? mongoose.model('post', postSchema)
