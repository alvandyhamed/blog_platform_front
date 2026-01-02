'use client'

import { mockArticles } from '../../../data/mock-articles'
import Link from 'next/link'

import Button from '../../../components/ui/Button'
import MainLayout from '../../../components/templates/MainLayout'

export default function AdminArticlesPage() {
  return (
    <MainLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">مقالات</h1>
        <Link href="/articles/create">
          <Button variant="primary">➕ مقاله جدید</Button>
        </Link>
      </div>

      <div className="overflow-x-auto bg-surface p-4 rounded shadow border border-border">
        <table className="min-w-full text-sm text-right rtl:text-right">
          <thead className="text-xs text-text-secondary uppercase border-b border-border">
            <tr>
              <th className="px-4 py-2">عنوان</th>
              <th className="px-4 py-2">نویسنده</th>
              <th className="px-4 py-2">تاریخ</th>
              <th className="px-4 py-2">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {mockArticles.map((article) => (
              <tr key={article.id} className="border-b border-border hover:bg-background">
                <td className="px-4 py-2">{article.title}</td>
                <td className="px-4 py-2">{article.author}</td>
                <td className="px-4 py-2">{article.created_at}</td>
                <td className="px-4 py-2 flex gap-2 flex-wrap">
                  <Link href={`/articles/${article.id}/edit`}>
                    <Button variant="secondary" className="text-xs">✏️ ویرایش</Button>
                  </Link>
                  <Button variant="outline" className="text-xs">🗑 حذف</Button>
                  <Button variant="primary" className="text-xs">✅ تأیید</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MainLayout>
  )
}