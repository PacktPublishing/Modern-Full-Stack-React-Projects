import { createUser, loginUser, getUserInfoById } from '../services/users.js'

export default function userRoutes(app) {
  app.post('/api/v1/user/signup', async (req, res) => {
    const user = await createUser(req.body)
    return res.status(201).json({ username: user.username })
  })

  app.post('/api/v1/user/login', async (req, res) => {
    const token = await loginUser(req.body)
    return res.status(200).send({ token })
  })

  app.get('/api/v1/users/:id', async (req, res) => {
    const userInfo = await getUserInfoById(req.params.id)
    return res.status(200).send(userInfo)
  })
}
