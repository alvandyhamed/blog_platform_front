import ArticleCard from '@/components/molecules/ArticleCard'
import { Article } from '../../../../types/article'

type Props = {
  articles: Article[]
  onReadMore?: (id: string) => void
}

export default function ArticleFeed({ articles, onReadMore }: Props) {
  if (!articles.length) {
    return <p className="text-center text-text-secondary">مقاله‌ای یافت نشد.</p>
  }

  return (
    <div className="grid gap-4">
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          title={article.title}
          summary={article.summary}
          author={article.author}
          onClick={() => onReadMore?.(article.id)}
        />
      ))}
    </div>
  )
}