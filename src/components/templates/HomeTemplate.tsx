'use client'

import ArticleFeed from '../organisms/ArticleFeed/ArticleFeed'
import SearchInput from '@/components/molecules/SearchInput'
import MainLayout from './MainLayout'

type Props = {
  articles: any[] // می‌تونه دقیق‌تر بشه
}

export default function HomeTemplate({ articles }: Props) {
  return (
    <MainLayout>
      <div className="space-y-6">
        <SearchInput value={''} onChange={function (value: string): void {
                  throw new Error('Function not implemented.')
              } } />
        <ArticleFeed articles={articles} />
      </div>
    </MainLayout>
  )
}