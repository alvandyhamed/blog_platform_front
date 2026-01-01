'use client'

import Link from 'next/link'
import MainLayout from './MainLayout'
import Button from '@/components/ui/Button'

export default function NotFoundTemplate() {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-6">
        <h1 className="text-6xl font-bold text-error">۴۰۴</h1>
        <p className="text-lg text-text-secondary">
          صفحه‌ای که به دنبالش هستید پیدا نشد.
        </p>
        <Link href="/">
          <Button variant="primary">برگشت به صفحه اصلی</Button>
        </Link>
      </div>
    </MainLayout>
  )
}