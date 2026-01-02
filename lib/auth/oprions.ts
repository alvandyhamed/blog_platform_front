import GoogleProvider from 'next-auth/providers/google'
import { NextAuthOptions } from 'next-auth'

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      // نقش کاربر رو ذخیره کن (فعلاً فرضی)
      if (session.user) {
        // @ts-expect-error: add dynamic role property to user
        session.user.role = token.role || 'user'
      }
      return session
    },
    async jwt({ token }) {
      // اینجا مثلاً نقش از دیتابیس بیاد
      token.role = token.email === 'admin@example.com' ? 'admin' : 'writer'
      return token
    },
  },
}