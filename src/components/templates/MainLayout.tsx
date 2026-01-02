// import Header from '@/components/organisms/AuthGuard/AuthGuard'
import Footer from '@/components/organisms/Footer/Footer'
import { ReactNode } from 'react'
import Header from '../organisms/Header/Header'

type Props = {
  children: ReactNode
  withSidebar?: boolean
  sidebar?: ReactNode
}

export default function MainLayout({ children, withSidebar = false, sidebar }: Props) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-6">
        {withSidebar ? (
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">{children}</div>
            <aside className="w-full lg:w-1/3">{sidebar}</aside>
          </div>
        ) : (
          children
        )}
      </main>

      <Footer />
    </div>
  )
}