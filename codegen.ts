import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/gql/schema.graphql",
  generates: {
    "./src/types.ts": {},
  },
};

export default config;