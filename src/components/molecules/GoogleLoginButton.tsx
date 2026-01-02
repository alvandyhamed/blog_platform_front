'use client'

import AuthButton from './AuthButton'

type Props = {
  onSuccess?: () => void
  onError?: (error: Error) => void
}

export default function GoogleLoginButton({ onSuccess, onError }: Props) {
  const handleClick = () => {
    try {
      // استفاده از Google OAuth URL مستقیم برای redirect-based flow
      const clientId = '107360845446-s2fgn9o68u8asune4dfec7ol7nqak6a2.apps.googleusercontent.com'
      
      // استفاده از origin فعلی برای redirect URI - باید با Google Cloud Console مطابقت داشته باشد
      const origin = typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000'
      const redirectUri = encodeURIComponent(`${origin}/api/auth/callback/google`)
      const scope = encodeURIComponent('openid email profile')
      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}&access_type=offline&prompt=consent`
      
      window.location.href = authUrl
    } catch (error) {
      console.error('Google login error:', error)
      onError?.(error as Error)
    }
  }

  return <AuthButton onClick={handleClick} />
}

