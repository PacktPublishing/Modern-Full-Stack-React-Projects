import { Navigation } from '@/components/Navigation'

export const metadata = {
  title: 'Full-Stack Next.js Blog',
  description: 'A blog about React and Next.js',
}

export default function RootLayout({ children }) {
  const user = { username: 'dan' }
  return (
    <html lang='en'>
      <body>
        <nav>
          <Navigation username={user?.username} />
        </nav>
        <br />
        <main>{children}</main>
      </body>
    </html>
  )
}
