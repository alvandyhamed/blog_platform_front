// src/lib/auth/AuthProvider.tsx
'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

type User = {
  id: string
  name: string
  email: string
  role: 'admin' | 'writer' | 'user'
}

type AuthContextType = {
  user: User | null
  token: string | null
  login: (token: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    // خواندن token از localStorage یا cookie
    const getToken = () => {
      // اول از localStorage
      const localToken = localStorage.getItem('token')
      if (localToken) return localToken
      
      // اگر در localStorage نبود، از cookie بخوان
      if (typeof document !== 'undefined') {
        const cookies = document.cookie.split('; ')
        const tokenCookie = cookies.find(row => row.startsWith('token='))
        if (tokenCookie) {
          return tokenCookie.split('=')[1]
        }
      }
      return null
    }

    const savedToken = getToken()
    if (savedToken) {
      setToken(savedToken)
      // ذخیره در localStorage هم برای سازگاری
      if (!localStorage.getItem('token')) {
        localStorage.setItem('token', savedToken)
      }
      try {
        // بررسی اینکه token فرمت JWT دارد یا نه
        const parts = savedToken.split('.')
        if (parts.length !== 3) {
          // اگر token فرمت JWT ندارد، ممکن است یک string ساده باشد
          console.warn('Token is not in JWT format, treating as plain token')
          // می‌توانیم از API برای decode کردن استفاده کنیم یا token را به همین صورت نگه داریم
          return
        }
        
        // Decode کردن payload از JWT
        const payload = JSON.parse(atob(parts[1]))
        if (payload.user) {
          setUser(payload.user)
        } else if (payload.email) {
          // اگر user در payload نیست، از email و name استفاده می‌کنیم
          setUser({
            id: payload.sub || payload.id || '',
            name: payload.name || payload.email?.split('@')[0] || '',
            email: payload.email || '',
            role: payload.role || 'user',
          })
        }
      } catch (error) {
        console.error('Error decoding token:', error)
        // اگر token معتبر نیست، آن را پاک می‌کنیم
        localStorage.removeItem('token')
        if (typeof document !== 'undefined') {
          document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
        }
        setToken(null)
        setUser(null)
      }
    }
  }, [])

  const login = (token: string) => {
    localStorage.setItem('token', token)
    setToken(token)
    try {
      // بررسی اینکه token فرمت JWT دارد یا نه
      const parts = token.split('.')
      if (parts.length !== 3) {
        // اگر token فرمت JWT ندارد، ممکن است یک string ساده باشد
        console.warn('Token is not in JWT format, treating as plain token')
        // می‌توانیم از API برای دریافت اطلاعات کاربر استفاده کنیم
        // یا token را به همین صورت نگه داریم
        router.push('/')
        return
      }
      
      // Decode کردن payload از JWT
      const payload = JSON.parse(atob(parts[1]))
      if (payload.user) {
        setUser(payload.user)
      } else if (payload.email) {
        setUser({
          id: payload.sub || payload.id || '',
          name: payload.name || payload.email?.split('@')[0] || '',
          email: payload.email || '',
          role: payload.role || 'user',
        })
      }
    } catch (error) {
      console.error('Error decoding token:', error)
      // اگر token decode نمی‌شود، باز هم token را نگه می‌داریم
      // ممکن است بک‌اند از فرمت دیگری استفاده کند
    }
    router.push('/')
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
    setToken(null)
    router.push('/')
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used inside <AuthProvider />')
  return context
}