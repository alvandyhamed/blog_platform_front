// src/components/layout/ThemeSwitcher.tsx
'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1 text-sm border rounded bg-surface text-text-primary border-border hover:opacity-80 transition-opacity"
    >
      {theme === 'dark' ? '☀️ لایت مود' : '🌙 دارک مود'}
    </button>
  )
}