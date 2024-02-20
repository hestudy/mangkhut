import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  documents: "entrypoints/**/*.{tsx,ts}",
  schema: ["system.graphql", "schema.graphql"],
  generates: {
    "entrypoints/gql/": {
      preset: "client",
      plugins: [],
    },
  },
  ignoreNoDocuments: true,
};

export default config;
