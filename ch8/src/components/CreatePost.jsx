import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { createPost } from '../api/posts.js'
import { useAuth } from '../contexts/AuthContext.jsx'

export function CreatePost() {
  const [token] = useAuth()

  const [title, setTitle] = useState('')
  const [contents, setContents] = useState('')

  const queryClient = useQueryClient()
  const createPostMutation = useMutation({
    mutationFn: () => createPost(token, { title, contents }),
    onSuccess: () => queryClient.invalidateQueries(['posts']),
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    createPostMutation.mutate()
  }

  if (!token) return <div>Please log in to create new posts.</div>

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='create-title'>Title: </label>
        <input
          type='text'
          name='create-title'
          id='create-title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <br />
      <textarea
        value={contents}
        onChange={(e) => setContents(e.target.value)}
      />
      <br />
      <br />
      <input
        type='submit'
        value={createPostMutation.isPending ? 'Creating...' : 'Create'}
        disabled={!title || createPostMutation.isPending}
      />
      {createPostMutation.isSuccess ? (
        <>
          <br />
          Post created successfully!
        </>
      ) : null}
    </form>
  )
}
