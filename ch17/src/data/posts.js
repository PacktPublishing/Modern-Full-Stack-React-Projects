import 'server-only'
import { Post } from '@/db/models'

export async function createPost(userId, { title, contents }) {
  const post = new Post({ author: userId, title, contents })
  return await post.save()
}

export async function listAllPosts() {
  return await Post.find({})
    .sort({ createdAt: 'descending' })
    .populate('author', 'username')
    .lean()
}

export async function getPostById(postId) {
  return await Post.findById(postId).populate('author', 'username').lean()
}
