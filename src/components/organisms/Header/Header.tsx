'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import ThemeSwitcher from '@/components/layout/ThemeSwitcher'
import Button from '@/components/ui/Button'

export default function Header() {
  const { data: session } = useSession()

  return (
    <header className="flex items-center justify-between py-4 px-6 border-b border-border bg-surface">
      <Link href="/" className="text-xl font-bold text-primary font-iran">
        🔐 وبلاگ امنیتی
      </Link>

      <div className="flex items-center gap-4">
        <ThemeSwitcher />
        {session ? (
          <Link href="/profile">
            <Image
              src={session.user?.image || '/avatar.png'}
              alt={session.user?.name || 'کاربر'}
              width={32}
              height={32}
              className="rounded-full"
            />
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