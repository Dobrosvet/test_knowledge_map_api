// v4
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';

// The GraphQL schema
const typeDefs = `#graphql
  type Query {
    hello: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'world',
  },
};

const app = express();
const httpServer = http.createServer(app);

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
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