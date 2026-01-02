// src/app/page.tsx
'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import MainLayout from '@/components/templates/MainLayout'
import { useAuth } from '@lib/auth/auth/AuthProvider'

export default function HomePage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { login } = useAuth()
  const loginSuccess = searchParams.get('login')
  const tokenFromQuery = searchParams.get('token')

  useEffect(() => {
    // اگر login موفق بود و token در query parameter است
    if (loginSuccess === 'success' && tokenFromQuery) {
      console.log('Home page: login success, token:', tokenFromQuery)
      login(tokenFromQuery)
      // پاک کردن query parameters از URL
      router.replace('/')
    }
  }, [loginSuccess, tokenFromQuery, login, router])

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-4">به وبلاگ امنیتی خوش آمدید 🔐</h1>
      <p>آخرین مقالات، آموزش‌ها و نکات امنیتی را اینجا بخوا11نید.</p>
      <p>سلام</p>
    </MainLayout>
  )
}