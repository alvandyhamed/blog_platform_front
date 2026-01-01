import { notFound } from 'next/navigation'

export default function NotFound() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background text-text-primary">
        <h1 className="text-2xl font-bold">صفحه مورد نظر پیدا نشد :(</h1>
      </div>
    )
  }