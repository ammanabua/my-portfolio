import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Amman Abua - Portfolio Website',
  description: 'Full-stack software engineer portfolio showcasing projects and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-mont bg-slate-900 text-white antialiased">{children}</body>
    </html>
  )
}
