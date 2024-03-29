import './globals.css'
import './style.css'
import { ChakraProvider } from '@chakra-ui/react'

export const metadata = {
  title: 'Portfolio',
  description: 'Created by next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <ChakraProvider>
        <body className="bg-gray-300 dark:bg-[#1c1c1c] text-black dark:text-white transition-all duration-500">{children}</body>
      </ChakraProvider>
    </html>
  )
}
