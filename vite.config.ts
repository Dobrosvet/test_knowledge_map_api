import { defineConfig } from 'vite'
import graphqlLoader from "vite-plugin-graphql-loader";
import vercel from 'vite-plugin-vercel';

export default defineConfig({
  server: {
    port: process.env.PORT as unknown as number,
  },
  plugins: [graphqlLoader(), vercel()],
})