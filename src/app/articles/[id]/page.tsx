// src/app/articles/[id]/page.tsx
import { mockArticles } from '@/data/mock-articles'
import { notFound } from 'next/navigation'

type Props = {
  params: { id: string }
}

export default function ArticleDetailPage({ params }: Props) {
  const article = mockArticles.find((a) => a.id === params.id)

  if (!article) return notFound()

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold text-primary">{article.title}</h1>
      <p className="text-text-secondary text-sm">{article.summary}</p>
      <div className="text-xs text-text-secondary">
        👤 {article.author} - 🗓 {new Date(article.created_at).toLocaleDateString('fa-IR')}
      </div>
    </section>
  )
}