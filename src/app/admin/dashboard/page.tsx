'use client'

import MainLayout from '../../../components/templates/MainLayout'
import { mockArticles } from '@/data/mock-articles'
import Button from '../../../components/ui/Button'

export default function AdminDashboardPage() {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-primary">📊 داشبورد ادمین</h1>

        {mockArticles.length === 0 ? (
          <p className="text-text-secondary">هیچ مقاله‌ای برای بررسی وجود ندارد.</p>
        ) : (
          mockArticles.map((article) => (
            <div
              key={article.id}
              className="p-4 border border-border rounded bg-surface shadow-sm space-y-2"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-text-primary">{article.title}</h2>
                <span className="text-sm text-text-secondary">{article.author}</span>
              </div>
              <p className="text-sm text-text-secondary">{article.summary}</p>

              <div className="flex gap-2 justify-end">
                <Button variant="outline">❌ حذف</Button>
                <Button variant="primary">✔️ تأیید</Button>
              </div>
            </div>
          ))
        )}
      </div>
    </MainLayout>
  )
}