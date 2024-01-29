import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const authResponse = await fetch(
            "http://localhost:8080/auth/signin",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(credentials),
            }
          );

          if (!authResponse.ok) {
            return null;
          }

          const user = await authResponse.json();

          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
});
