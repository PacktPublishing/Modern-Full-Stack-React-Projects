import { FullPost } from '@/components/FullPost'

export default function ViewPostPage({ params }) {
  const post = {
    title: `Hello Next.js (${params.id})`,
    contents: 'This will be fetched from the database later',
    author: { username: 'Daniel Bugl' },
  }
  return (
    <FullPost
      title={post.title}
      contents={post.contents}
      author={post.author}
    />
  )
}
