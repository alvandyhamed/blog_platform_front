import Link from 'next/link'
import MainLayout from '../components/templates/MainLayout'
import Button from '../components/ui/Button'

export default function NotFoundPage() {
  return (
    <MainLayout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6 text-center">
        <h1 className="text-5xl font-bold text-error">۴۰۴</h1>
        <p className="text-lg text-text-secondary">صفحه‌ای که دنبال آن هستید پیدا نشد.</p>
        <Link href="/">
          <Button variant="primary">بازگشت به خانه</Button>
        </Link>
      </div>
    </MainLayout>
  )
}