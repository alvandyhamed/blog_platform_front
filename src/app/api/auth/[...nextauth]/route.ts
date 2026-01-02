import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && profile) {
        token.role = 'admin' // یا 'author' — بستگی به API ات داره
        token.id = profile.sub
      }
      return token
    },
    async session({ session, token }) {
      if (!session.user) {
        session.user = {};
      }
      // Use type assertions to avoid TS errors. You might want to type User more strictly elsewhere.
      (session.user as any).role = token.role;
      (session.user as any).id = token.id;
      return session;
    },
  },
})

export { handler as GET, handler as POST }