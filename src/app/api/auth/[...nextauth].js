import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { logMeIn } from '../../../services/PetMatch'

const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'jsmith@gmail.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const result = await logMeIn(credentials)
        const { sucess, message, data } = result
        if (!sucess) {
          throw new Error(message)
        }
        // You must return an object containing the following fields
        return {
          token: data.token,
        }
      },
    }),
  ],
})

export { handler as GET, handler as POST }
