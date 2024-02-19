import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  documents: "entrypoints/**/*.tsx",
  generates: {
    "entrypoints/gql/system/": {
      preset: "client",
      plugins: [],
      schema: "system.graphql",
    },
  },
  ignoreNoDocuments: true,
};

export default config;
