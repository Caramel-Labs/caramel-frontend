import '@/app/globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/app/components/navbar'
import AuthProvider from '@/app/components/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Caramel App',
  description: 'This is the caramel app babyyy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="./../favicon.png" sizes="any" />
      </head>
      <body>
        <AuthProvider>
        {children}
        <Navbar/>
        </AuthProvider>
      </body>
    </html>
  )
}
