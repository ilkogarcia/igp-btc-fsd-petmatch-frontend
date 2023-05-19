import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { logMeIn } from '../../../../services/auth.services'

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'jsmith@domain.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const res = await logMeIn(credentials?.email, credentials?.password)
        if (res.sucess) {
          return res.data
        } else {
          throw new Error(res.message)
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },

    async session({ session, token, user }) {
      session.user = token
      return session
    },
  },

  session: {
    strategy: 'jwt',
    maxAge: 2 * 60 * 60, // 2 hours
    updateAge: 10 * 60, // 10 minutes
  },

  pages: {
    signIn: '/login',
    newUser: '/register',
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
