// src/components/molecules/ArticleMeta.tsx
import { formatDate } from '../../../lib/utils'
import UserInfo from './UserInfo'


type Props = {
  author: {
    name: string
    avatar: string
  }
  date: string | Date
  className?: string
}

export default function ArticleMeta({ author, date, className }: Props) {
  return (
    <div className={`flex items-center justify-between text-sm text-text-secondary ${className}`}>
      <UserInfo name={author.name} avatar={author.avatar} />
      <span>{formatDate(date)}</span>
    </div>
  )
}