'use client'

import { GoogleOAuthProvider } from '@react-oauth/google'

export default function GoogleProviderWrapper({ children }: { children: React.ReactNode }) {
    
  return (
    <GoogleOAuthProvider clientId="107360845446-s2fgn9o68u8asune4dfec7ol7nqak6a2.apps.googleusercontent.com">
      {children}
    </GoogleOAuthProvider>
  )
}