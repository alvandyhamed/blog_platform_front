// src/components/molecules/ArticleList.tsx

import ArticleCard from './ArticleCard'

type Article = {
  id: string
  title: string
  excerpt: string
  cover?: string
  author: {
    name: string
    avatar: string
  }
  date: string | Date
}

type Props = {
  articles: Article[]
  className?: string
}

export default function ArticleList({ articles, className }: Props) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {articles.map((article) => (
        <ArticleCard summary={''} key={article.id} {...article} />
      ))}
    </div>
  )
}