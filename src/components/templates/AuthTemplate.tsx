'use client'

import MainLayout from './MainLayout'
import GoogleLoginButton from '@/components/molecules/GoogleLoginButton'

export default function AuthTemplate() {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
        <h1 className="text-2xl font-bold text-primary">ورود به وبلاگ امنیتی</h1>
        <p className="text-text-secondary text-sm text-center max-w-md">
          برای نوشتن، لایک کردن یا ثبت نظر وارد حساب گوگل خود شوید.
        </p>
        <GoogleLoginButton />
      </div>
    </MainLayout>
  )
}