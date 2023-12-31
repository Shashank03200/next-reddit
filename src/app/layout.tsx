import Navbar from '@/components/Navbar'



import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import {Inter} from 'next/font/google'
export const metadata = {
  title: 'Breadit',
  description: 'A Reddit clone built with Next.js and TypeScript.',
}
import { Button } from "@/components/ui/Button"
import { Toaster } from '@/src/components/ui/toaster'

const inter = Inter({subsets: ["latin"]})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={
      cn('bg-white text-slate-900 antialiased light', inter.className)
    }>
      <body className='min-h-screen pt-12 antialiased bg-slate-50'>
          <Navbar />
          
          <div className='container h-full pt-12 mx-auto max-w-7xl'>
          {children}    
          
          </div>
          <Button variant="outline">Button</Button>
          <Toaster />
        </body>

    </html>
  )
}
