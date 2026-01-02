'use client'


import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useRole } from '../../../lib/hooks/useRole'

export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const { role, status } = useRole()
  const router = useRouter()

  useEffect(() => {
    if (status === 'loading') return

    if (role !== 'admin') {
      router.push('/')
    }
  }, [role, status])

  if (role !== 'admin') return null

  return <>{children}</>
}