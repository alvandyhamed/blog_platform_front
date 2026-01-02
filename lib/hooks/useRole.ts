import { useSession } from 'next-auth/react'

export function useRole() {
  const { data: session, status } = useSession()
  // Type guard: add type assertion or extend session.user type to include 'role'
  const role =
    (session?.user && 'role' in session.user
      ? (session.user as { role?: string }).role
      : undefined) || 'guest' // اگر لاگین نباشه 'guest'

  return { role, session, status }
}