/*
    this shit might be the worst and dummiest authenticator a programmer ever done k
*/

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const isCorrectCredentials = (credentials) =>
  credentials.username === process.env.NEXTAUTH_USERNAME &&
  credentials.password === process.env.NEXTAUTH_PASSWORD;


const authOptions = {
  pages: { signIn: '../../login', },
  session: {
    strategy: 'jwt'
  },
  providers:[
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      authorize(credentials, req) {
        const {email, password} = credentials;

        if(email !== "emailmuitotop@email.com" || password !== "senhasupersegura123") return null
        else return {status: "ok"}
      }
    })
  ]
}

export default NextAuth(authOptions)

// const options = {
//   pages: { signIn: '../../login', },
//   callbacks: {
//     async signIn({ user, account, profile, email, credentials }) {
//       const isAllowedToSignIn = true
//       if (isAllowedToSignIn) {
//         return true
//       } else {
//         // Return false to display a default error message
//         return false
//         // Or you can return a URL to redirect to:
//         // return '/unauthorized'
//       }
//     }
//   },
//   // Configure one or more authentication providers
//   providers: [
//     CredentialsProvider({
//       // The name to display on the sign in form (e.g. 'Sign in with...')
//       name: "credentials",
//       // The credentials is used to generate a suitable form on the sign in page.
//       // You can specify whatever fields you are expecting to be submitted.
//       // e.g. domain, username, password, 2FA token, etc.
//       credentials: {
//         username: { label: "Username", type: "text", placeholder: "jsmith" },
//         password: { label: "Password", type: "password" },
//       },
//       authorize: async (credentials) => {
//         if (isCorrectCredentials(credentials)) {
//           const user = { id: 1, name: "Admin" };
//           // Any object returned will be saved in `user` property of the JWT
//           return Promise.resolve(user);
//         } else {
//           // If you return null or false then the credentials will be rejected
//           return Promise.resolve(null);
//           // You can also Reject this callback with an Error or with a URL:
//           // return Promise.reject(new Error('error message')) // Redirect to error page
//           // return Promise.reject('/path/to/redirect')        // Redirect to a URL
//         }
//       },
//     }),
//   ],
// };

// export default (req, res) => NextAuth(req, res, authOptions);