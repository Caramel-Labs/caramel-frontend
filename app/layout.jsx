import './globals.css'
import { Inter } from 'next/font/google'
import AuthProvider from '@/app/utility/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Loop',
  description: 'Stay in the loop',
  manifest: '/manifest.json',
  icon: '/favicon.png',
  theme: '#000000',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.png" sizes="any" />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <AuthProvider>
        {children}
        </AuthProvider>
      </body>
    </html>
  )
}
