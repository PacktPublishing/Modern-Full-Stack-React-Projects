import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { loginUser } from '@/data/users'
import { initDatabase } from '@/db/init'
import { Login } from '@/components/Login'

async function loginAction(prevState, formData) {
  'use server'
  let token
  try {
    await initDatabase()
    token = await loginUser({
      username: formData.get('username'),
      password: formData.get('password'),
    })
  } catch (err) {
    return { error: err.message }
  }
  cookies().set({
    name: 'AUTH_TOKEN',
    value: token,
    path: '/',
    maxAge: 60 * 60 * 24,
    secure: true,
    httpOnly: true,
  })
  redirect('/')
}

export default function LoginPage() {
  return <Login loginAction={loginAction} />
}
