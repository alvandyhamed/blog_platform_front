// src/app/articles/page.tsx
import { mockArticles } from '@/data/mock-articles'
import ArticleCard from '../../components/molecules/ArticleCard'

export default function ArticleListPage() {
  return (
    <section className="grid gap-6">
      <h1 className="text-2xl font-bold mb-4 text-primary">لیست مقالات</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockArticles.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            summary={article.summary}
            author={
              typeof article.author === "string"
                ? { name: article.author, avatar: "" }
                : article.author
            }
          />
        ))}
      </div>
    </section>
  )
}