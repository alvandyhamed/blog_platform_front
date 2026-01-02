'use client'

import Link from 'next/link'
import Image from 'next/image'
import ThemeSwitcher from '@/components/layout/ThemeSwitcher'
import Button from '@/components/ui/Button'
import { useAuth } from '@lib/auth/auth/AuthProvider'

export default function Header() {
  const { user, token } = useAuth()

  return (
    <header className="flex items-center justify-between py-4 px-6 border-b border-border bg-surface">
      <Link href="/" className="text-xl font-bold text-primary font-iran">
        🔐 وبلاگ امنیتی
      </Link>

      <div className="flex items-center gap-4">
        <ThemeSwitcher />
        {user && token ? (
          <Link href="/profile">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold">
              {user.name?.charAt(0) || user.email?.charAt(0) || 'U'}
            </div>
          </Link>
        ) : (
          <Link href="/auth">
            <Button variant="primary">ورود با گوگل</Button>
          </Link>
        )}
      </div>
    </header>
  )
}