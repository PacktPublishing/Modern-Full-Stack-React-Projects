import { createServer } from 'node:http'

import { MongoClient } from 'mongodb'

const url = 'mongodb://localhost:27017/'
const dbName = 'ch2'
const client = new MongoClient(url)

client
  .connect()
  .then(() => console.log('Successfully connected to database!'))
  .catch((err) => console.error('Error connecting to database:', err))

const server = createServer((req, res) => {
  const db = client.db(dbName)
  const users = db.collection('users')
  users
    .find()
    .toArray()
    .then((usersList) => {
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(usersList))
    })
})

const host = 'localhost'
const port = 3000
server.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`)
})
