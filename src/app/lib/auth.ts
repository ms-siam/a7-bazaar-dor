import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";
import { MongoClient } from "mongodb";

const globalForMongo = globalThis as unknown as { mongoClient?: MongoClient };

const client =
    globalForMongo.mongoClient ??
    new MongoClient(process.env.MONGODB_URI!, {
        maxIdleTimeMS: 5000,
        serverSelectionTimeoutMS: 8000,
    });

globalForMongo.mongoClient = client;

export const auth = betterAuth({
    baseURL: process.env.BETTER_AUTH_URL,
    trustedOrigins: ["https://a7-bazaar-dor.vercel.app"],
    database: mongodbAdapter(client.db()),
    emailAndPassword: {
        enabled: true,
        minPasswordLength: 8,
    },
    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        },
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        },
    },
    plugins: [nextCookies()], 
});