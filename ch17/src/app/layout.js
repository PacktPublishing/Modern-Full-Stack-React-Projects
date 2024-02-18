import { cookies } from 'next/headers'
import { getUserInfoByToken } from '@/data/users'
import { Navigation } from '@/components/Navigation'

export const metadata = {
  title: 'Full-Stack Next.js Blog',
  description: 'A blog about React and Next.js',
}

async function logoutAction() {
  'use server'
  cookies().delete('AUTH_TOKEN')
}

export default async function RootLayout({ children }) {
  const token = cookies().get('AUTH_TOKEN')
  const user = await getUserInfoByToken(token?.value)
  return (
    <html lang='en'>
      <body>
        <nav>
          <Navigation username={user?.username} logoutAction={logoutAction} />
        </nav>
        <br />
        <main>{children}</main>
      </body>
    </html>
  )
}
