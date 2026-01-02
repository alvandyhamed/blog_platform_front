// src/lib/auth/AuthProvider.tsx
'use client'

import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'

type User = {
  id?: string
  name: string
  email: string
  role?: 'admin' | 'writer' | 'user'
  display_name?: string
  avatar_url?: string
}

type AuthContextType = {
  user: User | null
  token: string | null
  login: (token: string) => void
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // تابع برای دریافت اطلاعات کاربر از بک‌اند
  const fetchUserInfo = useCallback(async (token: string) => {
    try {
      // استفاده از API route در Next.js برای جلوگیری از CORS
      const response = await fetch('/api/auth/user', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        const userData = await response.json()
        return {
          id: userData.id || '',
          name: userData.display_name || userData.name || userData.email?.split('@')[0] || '',
          email: userData.email || '',
          role: userData.role || 'user',
          display_name: userData.display_name,
          avatar_url: userData.avatar_url,
        }
      } else {
        console.error('Failed to fetch user info:', response.status, response.statusText)
      }
    } catch (error) {
      console.error('Error fetching user info:', error)
      // اگر خطا رخ داد، null برگردان تا برنامه crash نکند
    }
    return null
  }, [])

  useEffect(() => {
    // خواندن token و user از localStorage
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

    const getSavedUser = () => {
      const savedUser = localStorage.getItem('user')
      if (savedUser) {
        try {
          return JSON.parse(savedUser)
        } catch {
          return null
        }
      }
      return null
    }

    const savedToken = getToken()
    const savedUser = getSavedUser()

    if (savedToken) {
      setToken(savedToken)
      // ذخیره در localStorage هم برای سازگاری
      if (!localStorage.getItem('token')) {
        localStorage.setItem('token', savedToken)
      }

      // اگر user اطلاعات در localStorage هست، استفاده کن
      if (savedUser) {
        setUser(savedUser)
        setIsLoading(false)
      } else {
        // اگر user اطلاعات نیست، از API بگیر
        fetchUserInfo(savedToken).then((userInfo) => {
          if (userInfo) {
            setUser(userInfo)
            localStorage.setItem('user', JSON.stringify(userInfo))
          } else {
            // اگر user اطلاعات دریافت نشد، token را invalid کن
            console.warn('Failed to fetch user info, clearing token')
            localStorage.removeItem('token')
            if (typeof document !== 'undefined') {
              document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
            }
            setToken(null)
          }
          setIsLoading(false)
        }).catch(() => {
          setIsLoading(false)
        })
      }
    } else {
      setIsLoading(false)
    }
  }, [fetchUserInfo])

  const login = async (token: string) => {
    localStorage.setItem('token', token)
    setToken(token)
    
    // دریافت اطلاعات کاربر از بک‌اند
    const userInfo = await fetchUserInfo(token)
    if (userInfo) {
      setUser(userInfo)
      localStorage.setItem('user', JSON.stringify(userInfo))
    }
    
    router.push('/')
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    if (typeof document !== 'undefined') {
      document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    }
    setUser(null)
    setToken(null)
    router.push('/')
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used inside <AuthProvider />')
  return context
}