'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import MainLayout from '../../components/templates/MainLayout'
import Image from 'next/image'
import Button from '../../components/ui/Button'
import { useAuth } from '@lib/auth/auth/AuthProvider'

export default function ProfilePage() {
  const { user, token, logout } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user || !token) {
      router.push('/auth')
    }
  }, [user, token, router])

  if (!user || !token) {
    return (
      <MainLayout>
        <div className="p-6">
          <p>در حال بارگذاری...</p>
        </div>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <div className="max-w-xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-primary">👤 پروفایل کاربری</h1>

        <div className="flex items-center gap-4">
          {user.avatar_Url ? (
            <Image
              src={user.avatar_Url}
              alt={user.display_name || user.name || 'User'}
              width={64}
              height={64}
              className="rounded-full"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold">
              {(user.display_name || user.name || user.email)?.charAt(0) || 'U'}
            </div>
          )}
          <div>
            <p className="font-bold text-lg">{user.display_name || user.name}</p>
            <p className="text-text-secondary text-sm">{user.email}</p>
          </div>
        </div>

        <div>
          <Button variant="danger" onClick={logout}>
            خروج از حساب
          </Button>
        </div>
      </div>
    </MainLayout>
  )
}