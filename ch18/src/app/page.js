import { initDatabase } from '@/db/init'
import { listAllPosts } from '@/data/posts'
import { PostList } from '@/components/PostList'

export default async function HomePage() {
  await initDatabase()
  const posts = await listAllPosts()
  return <PostList posts={posts} />
}
