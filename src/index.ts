import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './gql/library.graphql';


import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// "compile": "tsc && vite build",
// "start": "npm run compile && node ./dist/index.js"

async function main() {
  const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];

  const authors = [
    {
      name: 'Kate Chopin',
    },
    {
      name: 'Paul Auster',
    },
  ];

  // FIXME С такими полями тихо отдаёт none из базы
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
  
  await prisma.author.create({
    data: {
      name: 'Доктор Кто'
    }
  })

  const allAuthors = await prisma.author.findMany()




  // GraphQL запросы
  // Resolvers define how to fetch the types defined in your schema.
  // This resolver retrieves books from the "books" array above.
  // FIXME добавить проверку на то что данные должны совпадать с 
  // моделью иначе оно тих не подходит и данных нет вообще
  const resolvers = {
    Query: {
      books: () => books,
      authors: () => allAuthors
    },
  };

  // The ApolloServer constructor requires two parameters: your schema
  // definition and your set of resolvers.
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });


  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })