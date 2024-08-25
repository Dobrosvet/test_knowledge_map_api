// v4
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'

import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';

import { join } from 'node:path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { PrismaClient } from '@prisma/client'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'

import { loadSchemaSync } from '@graphql-tools/load'
import { addResolversToSchema } from '@graphql-tools/schema'

// import { gql } from './__generated__';
// import * as typeDefs from './__generated__';


// import typeDefs from './typ';
// import typeDef from './gql/library.graphql';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const schema = loadSchemaSync(join(__dirname, '/gql/library.graphql'), {
  loaders: [new GraphQLFileLoader()]
})

const prisma = new PrismaClient()

// GraphQL запросы
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
// FIXME добавить проверку на то что данные должны совпадать с 
// моделью иначе оно тих не подходит и данных нет вообще
const resolvers = {
  Query: {
    translations: async () => await prisma.translation.findMany(),
    texts: async () => await prisma.text.findMany(),
    authors: async () => await prisma.author.findMany(),
  },
};

const app = express();


const httpServer = http.createServer(app);

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();

app.use(
  cors(),
  bodyParser.json(),
  expressMiddleware(server),
);

// await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
// console.log(`🚀 Server ready at http://localhost:4000`);

export default app

// v3
// import express from 'express'

// var app = express();

// const setContext = (req, res, next) => {
//   if (!req.context) req.context = {};
//   next();
// };
// app.use(setContext);

// app.get('/api', (req, res) => {
//   return res.json({
//     message: `API`,
//   })
// })
// app.get('/', (req, res) => {
//   return res.json({
//     message: `Hello! Infinity ♾️ beginning...`,
//   })
// });

// export default app

// v2
// import express from 'express'
// const app = express()

// app.get('/', (req, res) => {
//   return res.json({
//     message: `Hello ${name}! Infinity ♾️ beginning...`,
//   })
// })

// app.listen(3000, () => console.log('Server ready 3000'))

// export default app

// v1
// import type { VercelRequest, VercelResponse } from '@vercel/node'

// export default function handler(req: VercelRequest, res: VercelResponse) {
//   const { name = 'Knowledge Map' } = req.query
//   return res.json({
//     message: `Hello ${name}! Infinity ♾️ beginning...`,
//   })
// }