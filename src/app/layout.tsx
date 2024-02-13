import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Codflix',
  description: 'Codflix app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-[#141414] text-white scrollbar-hide'>{children}</body>
    </html>
  )
}
