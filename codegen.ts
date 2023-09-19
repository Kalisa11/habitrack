import { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

const GRAPHQL_URL = process.env.GRAPHQL_URL as string;
const GRAPHQL_ADMIN_KEY = process.env.GRAPHQL_ADMIN_KEY as string;

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [GRAPHQL_URL]: {
        headers: {
          "x-hasura-admin-secret": GRAPHQL_ADMIN_KEY,
        },
      },
    },
  ],
  documents: "./src/graphql/**.graphql",
  ignoreNoDocuments: true,
  // generates: {
  //   "src/gql/": {
  //     preset: "client",
  //     plugins: [],
  //   },
  // },
  generates: {
    "src/graphql/generated/": {
      preset: "client",
      plugins: [],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
