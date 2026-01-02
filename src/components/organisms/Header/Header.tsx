'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ThemeSwitcher from '@/components/layout/ThemeSwitcher'
import Button from '@/components/ui/Button'
import { useAuth } from '@lib/auth/auth/AuthProvider'

export default function Header() {
  const { user, token, logout } = useAuth()
  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // بستن منو وقتی خارج از آن کلیک می‌شود
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false)
      }
    }

    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showMenu])

  const handleLogout = () => {
    logout()
    setShowMenu(false)
  }

  return (
    <header className="flex items-center justify-between py-4 px-6 border-b border-border bg-surface">
      <Link href="/" className="text-xl font-bold text-primary font-iran">
        🔐 وبلاگ امنیتی
      </Link>

      <div className="flex items-center gap-4">
        <ThemeSwitcher />
        {user && token ? (
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              {user.avatar_url ? (
                <Image
                  src={user.avatar_url}
                  alt={user.display_name || user.name || 'User'}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold">
                  {(user.display_name || user.name || user.email)?.charAt(0) || 'U'}
                </div>
              )}
              <span className="text-text-primary font-iran text-sm hidden sm:block">
                {user.display_name || user.name || user.email}
              </span>
            </button>

            {showMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-surface border border-border rounded-lg shadow-lg z-50">
                <div className="p-2">
                  <div className="px-3 py-2 border-b border-border">
                    <p className="text-sm font-bold text-text-primary">
                      {user.display_name || user.name}
                    </p>
                    <p className="text-xs text-text-secondary">{user.email}</p>
                  </div>
                  <Link
                    href="/profile"
                    onClick={() => setShowMenu(false)}
                    className="block px-3 py-2 text-sm text-text-primary hover:bg-background rounded transition-colors"
                  >
                    پروفایل
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-right px-3 py-2 text-sm text-error hover:bg-background rounded transition-colors"
                  >
                    خروج از حساب
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link href="/auth">
            <Button variant="primary">ورود با گوگل</Button>
          </Link>
        )}
      </div>
    </header>
  )
}