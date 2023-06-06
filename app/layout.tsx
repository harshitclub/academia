import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import Footer from '@/components/Footer/Footer'
import {Poppins} from 'next/font/google'

const poppins = Poppins({
  weight:['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: '',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Navbar/>
        
        {children}
        <Footer/>
        </body>
    </html>
  )
}
