'use client'

import ArticleDetail from '../organisms/ArticleDetail/ArticleDetail'
import CommentSection from '../organisms/CommentSection/CommentSection'
import MainLayout from './MainLayout'

type Props = {
  article: any // می‌تونی دقیق‌تر تایپ بدی
  comments: any[]
  isAdmin?: boolean
}

export default function ArticleDetailTemplate({ article, comments, isAdmin }: Props) {
  return (
    <MainLayout>
      <div className="space-y-8">
        <ArticleDetail article={article} />
        <CommentSection comments={comments} />
      </div>
    </MainLayout>
  )
}