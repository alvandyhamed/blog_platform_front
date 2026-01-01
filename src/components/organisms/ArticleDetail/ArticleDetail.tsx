import { Article } from '../../../../types/article'
import Avatar from '@/components/ui/Avatar'
import Heading from '@/components/ui/Heading'
import ReactMarkdown from 'react-markdown'

type Props = {
  article: Article
}

export default function ArticleDetail({ article }: Props) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Heading level={1}>{article.title}</Heading>
        <p className="text-text-secondary text-sm">{article.summary}</p>

        <div className="flex items-center gap-2 mt-2">
          <Avatar src={article.author.avatar} name={article.author.name} />
          <span className="text-xs text-text-secondary">{article.author.name}</span>
        </div>
      </div>

      <div className="prose prose-invert max-w-none">
        <ReactMarkdown>{article.content}</ReactMarkdown>
      </div>
    </div>
  )
}