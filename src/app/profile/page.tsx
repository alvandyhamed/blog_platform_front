'use client'

import { useSession, signOut } from 'next-auth/react'
import MainLayout from '../../components/templates/MainLayout'
import Image from 'next/image'
import Button from '../../components/ui/Button'

export default function ProfilePage() {
  const { data: session, status } = useSession()

  if (status === 'loading') return <p className="p-6">در حال بارگذاری...</p>
  if (!session) return <p className="p-6">برای مشاهده پروفایل، وارد شوید.</p>

  const user = session.user

  return (
    <MainLayout>
      <div className="max-w-xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-primary">👤 پروفایل کاربری</h1>

        <div className="flex items-center gap-4">
          <Image
            src={user?.image || '/avatar.png'}
            alt={user?.name || 'User'}
            width={64}
            height={64}
            className="rounded-full"
          />
          <div>
            <p className="font-bold text-lg">{user?.name}</p>
            <p className="text-text-secondary text-sm">{user?.email}</p>
          </div>
        </div>

        <div>
          <Button variant="danger" onClick={() => signOut()}>
            خروج از حساب
          </Button>
        </div>
      </div>
    </MainLayout>
  )
}