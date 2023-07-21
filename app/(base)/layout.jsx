import '@/app/globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/app/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Caramel App',
  description: 'This is the caramel app babyyy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Navbar/>
      </body>
    </html>
  )
}
