import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  documents: ["src/**/*.{tsx,ts}", "entrypoints/**/*.{tsx,ts}"],
  schema: ["system.graphql", "schema.graphql"],
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [],
    },
  },
  ignoreNoDocuments: true,
};

export default config;
