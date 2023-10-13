import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { hasuraClient } from "@/lib/hasuraClient";
import {
  CreateSocialUserDocument,
  GetUserbyEmailDocument,
  Users,
} from "@/src/graphql/generated/graphql";
import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";
import { getUser } from "@/src/helpers/auth";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        const user = await hasuraClient(GetUserbyEmailDocument, {
          email: credentials.email,
        }).then((data: any) => data?.users[0]);

        if (!user || !user?.password) {
          throw new Error("Invalid credentials");
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isCorrectPassword) {
          throw new Error("Invalid credentials");
        }

        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    // A secret to use for key generation
    secret: process.env.NEXTAUTH_SECRET,
    encode: async ({ secret, token, maxAge }) => {
      const jwtClaims = {
        ...token,
        iat: Date.now() / 1000,
        exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
        "https://hasura.io/jwt/claims": {
          "x-hasura-allowed-roles": ["user"],
          "x-hasura-default-role": "user",
          "x-hasura-role": "user",
          "x-hasura-user-id": `${token?.userId}`,
        },
      };
      const encodedToken = jwt.sign(jwtClaims, secret, { algorithm: "HS256" });

      return Promise.resolve(encodedToken);
    },
    decode: async ({ secret, token }) => {
      if (token === undefined) return Promise.resolve(null);
      const decoded: JwtPayload = <JwtPayload>(
        jwt.verify(token as string, secret)
      );
      return Promise.resolve(decoded);
    },
  },
  pages: {
    signIn: "login",
  },
  callbacks: {
    async jwt({ token, user, account, profile }) {
      // check if we have user from a provider
      if (account && profile) {
        // extracting firstName and lastName according to a provider
        switch (account.provider) {
          case "google":
            token.firstName = (profile as GoogleProfile).given_name;
            token.lastName = (profile as GoogleProfile).family_name;
            break;
          case "github":
            token.firstName = profile?.name?.split(" ").slice(0, -1).join(" ");
            token.lastName = profile?.name?.split(" ").slice(-1).join(" ");
            break;
          default:
            break;
        }
        try {
          // check if a user already exists in the database
          const data = (await hasuraClient(GetUserbyEmailDocument, {
            email: token.email,
          })) as { users: Users[] };

          if (data?.users?.length > 0) {
            token.userId = data.users[0].id;
            token.lastName = data.users[0].last_name;
            token.firstName = data.users[0].first_name;
          } else {
            // adding a user in the database
            const variables = {
              email: token.email,
              first_name: token.firstName,
              last_name: token.lastName,
            };
            const newUserData = (await hasuraClient(
              CreateSocialUserDocument,
              variables
            )) as { insert_users_one: Users };

            token.userId = newUserData.insert_users_one.id;
            token.lastName = newUserData.insert_users_one.last_name;
            token.firstName = newUserData.insert_users_one.first_name;
            token.email = newUserData.insert_users_one.email;
          }
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error(error);
        }
      }
      return Promise.resolve(token);
    },
    async session({ session, token }) {
      const secret = process.env.NEXTAUTH_SECRET;
      if (secret === undefined) {
        throw new Error("Unable to load Environment variables");
      }
      const user = await getUser(token?.email as string);
      const newSession = {
        ...session,
        user: {
          id: user?.userId,
          ...session.user,
        },
      };
      token = { ...token, ...user };
      return newSession;
    },
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
    maxAge: 86400, // 24 hours
    updateAge: 24 * 60 * 60, // 24 hours
  },
};
