export const authConfig = {
  pages: {
    signIn: "/login",
    newUser: "/register",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.access_token = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.access_token = token.access_token;
      }
      return session;
    },
    authorized({ auth, request }) {
      const user = auth?.user;
      const isOnHomePage = request.nextUrl?.pathname.startsWith("/");
      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");
      const isOnRegisterPage = request.nextUrl?.pathname.startsWith("/register");

      if (isOnLoginPage && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      if (isOnRegisterPage && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      if (isOnRegisterPage && !user) {
        return true;
      }

      if (isOnHomePage && !user) {
        return false;
      }

      return true;
    },
  },
};
