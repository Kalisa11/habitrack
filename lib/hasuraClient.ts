import { GraphQLClient } from "graphql-request";

const endpoint = process.env.NEXT_PUBLIC_HASURA_GRAPHQL_URL as string;
const adminKey = process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET as string;

export const hasuraClient = async (query: any, variables?: any) => {
  const graphqlClient = new GraphQLClient(endpoint);
  graphqlClient.setHeader("x-hasura-admin-secret", adminKey);
  return graphqlClient.request(query, variables);
};
