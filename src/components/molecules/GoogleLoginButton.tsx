'use client'

import { useEffect } from 'react'
import AuthButton from './AuthButton'
import { useRouter } from 'next/navigation'
import { useAuth } from '@lib/auth/auth/AuthProvider'

type Props = {
  onSuccess?: () => void
  onError?: (error: Error) => void
}

export default function GoogleLoginButton({ onSuccess, onError }: Props) {
  const router = useRouter()
  const { login } = useAuth()


  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== window.origin) return

      if (event.data.type === 'auth-success') {
        const token = event.data.token
        localStorage.setItem('token', token)

        onSuccess?.()
        login(token)
        router.push('/')
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [router, onSuccess])
  const handleClick = () => {
    // استفاده از Google OAuth URL مستقیم برای redirect-based flow
    const clientId = '107360845446-s2fgn9o68u8asune4dfec7ol7nqak6a2.apps.googleusercontent.com'

    // استفاده از origin فعلی برای redirect URI - باید با Google Cloud Console مطابقت داشته باشد
    const origin = typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000'
    const redirectUri = encodeURIComponent(`${origin}/auth/callback`)
    const scope = encodeURIComponent('openid email profile')
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}&access_type=offline&prompt=consent`

    // استفاده از popup به جای redirect برای جلوگیری از مشکلات proxy
    const popup = window.open(
      authUrl,
      'google-oauth',
      'width=500,height=600,scrollbars=yes,resizable=yes'
    )

    if (!popup) {
      console.error('Popup blocked')
      onError?.(new Error('Popup blocked'))
      return
    }

    // چک کردن اگر popup بسته شد یا redirect شد
    const checkClosed = setInterval(() => {
      try {
        if (popup.closed) {
          clearInterval(checkClosed)
          // اگر بسته شد، شاید موفق شده یا نه
          // برای سادگی، صفحه رو refresh کنیم
          //window.location.reload()
        }
      } catch (e) {
        // اگر cross-origin error، یعنی redirect شده
        clearInterval(checkClosed)
        window.location.reload()
      }
    }, 1000)
  }

  return <AuthButton onClick={handleClick} />
}
