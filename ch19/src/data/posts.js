import 'server-only'
import { unstable_cache as cache } from 'next/cache'
import { Post } from '@/db/models'

export async function createPost(userId, { title, contents }) {
  const post = new Post({ author: userId, title, contents })
  return await post.save()
}

export const listAllPosts = cache(
  async function listAllPosts() {
    return await Post.find({})
      .sort({ createdAt: 'descending' })
      .populate('author', 'username')
      .lean()
  },
  ['posts', 'listAllPosts'],
  { tags: ['posts'] },
)

export const getPostById = cache(
  async function getPostById(postId) {
    return await Post.findById(postId).populate('author', 'username').lean()
  },
  ['posts', 'getPostById'],
)
