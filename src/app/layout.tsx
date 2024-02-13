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
      <body className='overflow-hidden scrollbar-hide bg-black text-white'>{children}</body>
    </html>
  )
}
