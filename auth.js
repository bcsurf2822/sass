import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./libs/mongo";
import Resend from "next-auth/providers/resend";
import Google from "next-auth/providers/google";

const config = {
  providers: [
    // reference production checklist video when push google auth to deployment it requries registering dns and for some checks to take place
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Resend({
      apiKey: process.env.RESEND_KEY,
      from: "noreply@cfast.com",
      name: "Email",
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
};

// auth checks if user has valid session
export const { handlers, signIn, signOut, auth } = NextAuth(config);

// npm install @auth/mongodb-adapter
// trasaction and marketing emails
// transaction : login || mailgun resend
// marketing
