import {
  listAllPosts,
  listPostsByAuthor,
  listPostsByTag,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} from '../services/posts.js'
import { requireAuth } from '../middleware/jwt.js'

export default function postRoutes(app) {
  app.get('/api/v1/posts', async (req, res) => {
    const { sortBy, sortOrder, author, tag } = req.query
    const options = { sortBy, sortOrder }

    if (author && tag) {
      return res
        .status(400)
        .json({ error: 'query by either author or tag, not both' })
    } else if (author) {
      return res.json(await listPostsByAuthor(author, options))
    } else if (tag) {
      return res.json(await listPostsByTag(tag, options))
    } else {
      return res.json(await listAllPosts())
    }
  })

  app.get('/api/v1/posts/:id', async (req, res) => {
    const { id } = req.params
    const post = await getPostById(id)
    if (post === null) return res.status(404).end()
    return res.json(post)
  })

  app.post('/api/v1/posts', requireAuth, async (req, res) => {
    const post = await createPost(req.auth.sub, req.body)
    return res.json(post)
  })

  app.patch('/api/v1/posts/:id', requireAuth, async (req, res) => {
    const post = await updatePost(req.auth.sub, req.params.id, req.body)
    return res.json(post)
  })

  app.delete('/api/v1/posts/:id', requireAuth, async (req, res) => {
    const { deletedCount } = await deletePost(req.auth.sub, req.params.id)
    if (deletedCount === 0) return res.status(404).end()
    return res.status(204).end()
  })
}
