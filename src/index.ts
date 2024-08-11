// import { ApolloServer } from '@apollo/server';
// import { startStandaloneServer } from '@apollo/server/standalone';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";
import express from "express";
import cors from "cors";

import { PrismaClient } from '@prisma/client'

import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
// import typeDefs from './gql/library.graphql';

// https://dev.to/rxliuli/developing-and-building-nodejs-applications-with-vite-311n
// https://medium.com/@sppericat/how-to-setup-an-apollo-graphql-server-on-vercel-cc3f2dd72b3e


const app = express();

app.use(cors());
app.use(express.json());

const httpServer = http.createServer(app);

// FIXME ❗ Настроить время и часовую зону в базе данных (преверить нужно ли ещё настраивать что то подобное)

const prisma = new PrismaClient()

// FIXME С такими полями тихо отдаёт none из базы.
// Сделать Design Time проверку типов 
// const authors = [
//   {
//     boom: 'stroka',
//     title: 'Kate Chopin',
//   },
//   {
//     boom: 'stroka',
//     title: 'Paul Auster',
//   },
// ];

// FIXME ❗ Нужно заменить тестами
await prisma.author.create({
  data: {
    surname: 'Кто',
    givenNames: 'Доктор',
  }
})

// GraphQL запросы
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
// FIXME добавить проверку на то что данные должны совпадать с 
// моделью иначе оно тих не подходит и данных нет вообще
const resolvers = {
  Query: {
    translations: async () =>  await prisma.translation.findMany(),
    texts: async () =>  await prisma.text.findMany(),
    authors: async () => await prisma.author.findMany(),
  },
};

const typeDefs = loadSchemaSync('./dist/gql/library.graphql', {
  loaders: [new GraphQLFileLoader()]
});

// v3
const startApolloServer = async(app, httpServer) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
  console.log(`🚀  Server ready at:`);
  server.applyMiddleware({ app });
}

startApolloServer(app, httpServer);

export default httpServer;

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
// v2
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   playground: true,
//   introspection: true
// });

// https://www.apollographql.com/docs/apollo-server/api/apollo-server/
// ❗ serverless env вроде Vercel должно само запустить сервер

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
// const { url } = await startStandaloneServer(server, {
//   listen: { port: 4000 },
// });

// console.log(`🚀  Server ready at: ${url}`);
// async function main() {
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })