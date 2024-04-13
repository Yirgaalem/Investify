import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
}
// didn't add localhost:3000 to domains in google thingy 3 min of https://www.youtube.com/watch?v=P4kuSxpjA48&t=371s

export default NextAuth(authOptions)