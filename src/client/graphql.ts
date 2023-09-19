import { GraphQLClient } from "graphql-request";

const endpoint = process.env.NEXT_PUBLIC_HASURA_GRAPHQL_URL as string;
const adminKey = process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET as string;

export const gqlClient = new GraphQLClient(endpoint, {
  headers: {
    "x-hasura-admin-secret": adminKey,
  },
});
