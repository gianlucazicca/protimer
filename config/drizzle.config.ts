import { defineConfig } from "drizzle-kit";
export default defineConfig({
    dialect: "postgresql",
    schema: "src/server/db/schema/*.ts",
    out: "./src/server/db/migrations",
    dbCredentials: {
        url: process.env.NUXT_DATABASE_URL as string,
    },

});