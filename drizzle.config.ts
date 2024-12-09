import { defineConfig } from 'drizzle-kit';
import * as dotenv from "dotenv";

dotenv.config({
    path: ".env.local",
})

export default defineConfig({
    out: './app/server/migrations',
    schema: './app/server/schema.ts',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DRIZZLE_DATABASE_URL!,
    },
});