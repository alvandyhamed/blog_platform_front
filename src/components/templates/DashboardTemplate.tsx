'use client'

import MainLayout from './MainLayout'
import ArticleList from '../molecules/ArticleList'
import Sidebar from '../organisms/Sidebar/Sidebar'
import { Article } from '../../../types/article'

type Props = {
  articles: Article[]
  title?: string
  sidebarContent?: React.ReactNode
}

export default function DashboardTemplate({ articles, title = 'داشبورد ادمین', sidebarContent }: Props) {
  return (
    <MainLayout withSidebar={!!sidebarContent} sidebar={sidebarContent}>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-primary">{title}</h1>
        <ArticleList articles={articles as any} />
      </div>
    </MainLayout>
  )
}