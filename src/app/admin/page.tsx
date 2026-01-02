import AdminGuard from '@/components/guards/AdminGuard'

export default function AdminPage() {
  return (
    <AdminGuard>
      {/* محتوای ادمین */}
      <div>👮‍♀️ پنل مدیریت</div>
    </AdminGuard>
  )
}