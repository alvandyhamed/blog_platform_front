// src/app/layout.tsx
import { ReactNode } from 'react'
import { Providers } from '@/components/providers/Providers'
import '@/styles/globals.css'
import GoogleProviderWrapper from '@/components/providers/GoogleOAuthProvider'
import { AuthProvider } from '@lib/auth/auth/AuthProvider'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" suppressHydrationWarning>
      <body>
        <Providers>
          <GoogleProviderWrapper>
            <AuthProvider>{children}</AuthProvider>
          </GoogleProviderWrapper>
        </Providers>
      </body>
    </html>
  )
}