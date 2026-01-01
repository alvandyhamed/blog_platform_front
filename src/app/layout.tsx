// src/app/layout.tsx
import { ReactNode } from 'react'
import { Providers } from '@/components/providers/Providers'
import '@/styles/globals.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}