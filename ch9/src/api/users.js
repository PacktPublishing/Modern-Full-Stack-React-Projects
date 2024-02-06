export const signup = async ({ username, password }) => {
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  })
  if (!res.ok) throw new Error('failed to sign up')
  return await res.json()
}

export const login = async ({ username, password }) => {
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  })
  if (!res.ok) throw new Error('failed to login')
  return await res.json()
}

export const getUserInfo = async (id) => {
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  return await res.json()
}
