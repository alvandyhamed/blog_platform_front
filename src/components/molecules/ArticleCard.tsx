// src/components/molecules/ArticleCard.tsx

import Avatar from '@/components/ui/Avatar'
import Heading from '@/components/ui/Heading'
import Button from '@/components/ui/Button'
import { FC } from 'react'

type Author = {
  name: string
  avatar: string
}

type ArticleCardProps = {
  title: string
  summary: string
  author: Author
  onClick?: () => void
}

const ArticleCard: FC<ArticleCardProps> = ({ title, summary, author, onClick }) => {
  return (
    <div className="border border-border p-4 rounded bg-surface text-text-primary">
      <Heading level={3}>{title}</Heading>
      <p className="text-text-secondary text-sm mt-2">{summary}</p>
      <div className="flex justify-between items-center mt-4">
        <Avatar src={author.avatar} name={author.name} />
        <Button onClick={onClick} variant="secondary">ادامه مطلب</Button>
      </div>
    </div>
  )
}

export default ArticleCard