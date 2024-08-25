import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "./src/gql/library.graphql",
  generates: {
    "./api/__generated__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
};

export default config;

// v1
// import type { CodegenConfig } from '@graphql-codegen/cli';

// const config: CodegenConfig = {
//   overwrite: true,
//   schema: "./src/gql/library.graphql",
//   generates: {
//     "./api/types.ts": {
//       plugins: ["typescript", "typescript-resolvers", "typescript-operations", "typed-document-node"]
//     },
//   }
// };

// export default config;
