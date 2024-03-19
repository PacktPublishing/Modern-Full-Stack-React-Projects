import { initDatabase } from '@/db/init'
import { listAllPosts } from '@/data/posts'
import slug from 'slug'

export default async function sitemap() {
  const staticPages = [
    {
      url: `${process.env.BASE_URL}`,
    },
    {
      url: `${process.env.BASE_URL}/create`,
    },
    {
      url: `${process.env.BASE_URL}/login`,
    },
    {
      url: `${process.env.BASE_URL}/signup`,
    },
    {
      url: `${process.env.BASE_URL}/time`,
    },
  ]
  await initDatabase()
  const posts = await listAllPosts()
  const postsPages = posts.map((post) => ({
    url: `${process.env.BASE_URL}/posts/${post._id}/${slug(post.title)}`,
    lastModified: post.updatedAt,
  }))
  return [...staticPages, ...postsPages]
}
