// src/app/(auth)/auth/page.tsx
'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import MainLayout from '@/components/templates/MainLayout'
import { useAuth } from '@lib/auth/auth/AuthProvider'
import GoogleLoginButton from '@/components/molecules/GoogleLoginButton'

export default function AuthPage() {
  const { login } = useAuth()
  const searchParams = useSearchParams()
  const router = useRouter()
  const error = searchParams.get('error')
  const loginSuccess = searchParams.get('login')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // اگر login موفق بود، token را از query parameter یا cookie بخوان
    if (loginSuccess === 'success') {
      const tokenFromQuery = searchParams.get('token')
      
      if (tokenFromQuery) {
        // ذخیره در localStorage و login
        login(tokenFromQuery)
        // پاک کردن token از URL
        router.replace('/')
      } else {
        // اگر در query نبود، از cookie بخوان
        const token = document.cookie
          .split('; ')
          .find(row => row.startsWith('token='))
          ?.split('=')[1]
        
        if (token) {
          login(token)
          router.replace('/')
        }
      }
    }
  }, [loginSuccess, login, searchParams, router])

  useEffect(() => {
    // اگر خطایی از callback آمده
    if (error) {
      setLoading(false)
    }
  }, [error])

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
        <h1 className="text-2xl font-bold text-primary">ورود به وبلاگ امنیتی</h1>
        <p className="text-text-secondary text-sm text-center max-w-md">
          برای نوشتن، لایک کردن یا ثبت نظر وارد حساب گوگل خود شوید.
        </p>
        {error && (
          <p className="text-error text-sm">{decodeURIComponent(error)}</p>
        )}
        <GoogleLoginButton />
      </div>
    </MainLayout>
  )
}