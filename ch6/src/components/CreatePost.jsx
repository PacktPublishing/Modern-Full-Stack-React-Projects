import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'

import { createPost } from '../api/posts.js'
import { useAuth } from '../contexts/AuthContext.jsx'

export default function CreatePost() {
  const [token] = useAuth()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const queryClient = useQueryClient()
  const createPostMutation = useMutation({
    mutationFn: () => createPost(token, { title, content }),
    onSuccess: () => queryClient.invalidateQueries(['posts']),
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    createPostMutation.mutate()
  }

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
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <br />
      <br />
      <input
        type='submit'
        value={createPostMutation.isLoading ? 'Creating...' : 'Create'}
        // disabled={!title || createPostMutation.isLoading}
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
