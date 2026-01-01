// src/app/page.tsx

import MainLayout from '@/components/templates/MainLayout'

export default function HomePage() {
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-4">به وبلاگ امنیتی خوش آمدید 🔐</h1>
      <p>آخرین مقالات، آموزش‌ها و نکات امنیتی را اینجا بخوانید.</p>
    </MainLayout>
  )
}