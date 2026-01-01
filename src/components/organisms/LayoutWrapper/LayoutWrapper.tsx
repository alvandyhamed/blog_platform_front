

'use client'

import { ReactNode } from 'react'
import Header from '../AuthGuard/AuthGuard'
import Footer from '../Footer/Footer'


type Props = {
  children: ReactNode
}

export default function LayoutWrapper({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-6">{children}</main>
      <Footer />
    </div>
  )
}