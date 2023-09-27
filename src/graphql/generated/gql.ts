/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation createHabit($category_id: uuid = \"\", $description: String = \"\", $end_date: timestamptz = \"\", $name: String = \"\", $user_id: uuid = \"\", $start_date: timestamp = \"\", $email: String = \"\") {\n  insert_habit(\n    objects: {category_id: $category_id, description: $description, end_date: $end_date, name: $name, user_id: $user_id, start_date: $start_date}\n  ) {\n    affected_rows\n  }\n}": types.CreateHabitDocument,
    "mutation createSocialUser($email: String = \"\", $last_name: String = \"\", $first_name: String = \"\") {\n  insert_users_one(\n    object: {email: $email, last_name: $last_name, first_name: $first_name}\n  ) {\n    email\n    last_name\n    first_name\n  }\n}": types.CreateSocialUserDocument,
    "mutation createUser($email: String = \"\", $password: String = \"\") {\n  insert_users_one(object: {email: $email, password: $password}) {\n    email\n    password\n  }\n}": types.CreateUserDocument,
    "query GetCategory {\n  category {\n    id\n    description\n    name\n  }\n}": types.GetCategoryDocument,
    "query GetHabitByUser($email: String = \"\") {\n  habit(where: {user: {email: {_eq: $email}}}) {\n    id\n    name\n    user_id\n    description\n    created_at\n    end_date\n    updated_at\n    start_date\n    category {\n      name\n    }\n  }\n}": types.GetHabitByUserDocument,
    "query getUserbyEmail($email: String = \"\") {\n  users(where: {email: {_eq: $email}}) {\n    id\n    email\n    password\n    last_name\n    first_name\n  }\n}": types.GetUserbyEmailDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation createHabit($category_id: uuid = \"\", $description: String = \"\", $end_date: timestamptz = \"\", $name: String = \"\", $user_id: uuid = \"\", $start_date: timestamp = \"\", $email: String = \"\") {\n  insert_habit(\n    objects: {category_id: $category_id, description: $description, end_date: $end_date, name: $name, user_id: $user_id, start_date: $start_date}\n  ) {\n    affected_rows\n  }\n}"): (typeof documents)["mutation createHabit($category_id: uuid = \"\", $description: String = \"\", $end_date: timestamptz = \"\", $name: String = \"\", $user_id: uuid = \"\", $start_date: timestamp = \"\", $email: String = \"\") {\n  insert_habit(\n    objects: {category_id: $category_id, description: $description, end_date: $end_date, name: $name, user_id: $user_id, start_date: $start_date}\n  ) {\n    affected_rows\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation createSocialUser($email: String = \"\", $last_name: String = \"\", $first_name: String = \"\") {\n  insert_users_one(\n    object: {email: $email, last_name: $last_name, first_name: $first_name}\n  ) {\n    email\n    last_name\n    first_name\n  }\n}"): (typeof documents)["mutation createSocialUser($email: String = \"\", $last_name: String = \"\", $first_name: String = \"\") {\n  insert_users_one(\n    object: {email: $email, last_name: $last_name, first_name: $first_name}\n  ) {\n    email\n    last_name\n    first_name\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation createUser($email: String = \"\", $password: String = \"\") {\n  insert_users_one(object: {email: $email, password: $password}) {\n    email\n    password\n  }\n}"): (typeof documents)["mutation createUser($email: String = \"\", $password: String = \"\") {\n  insert_users_one(object: {email: $email, password: $password}) {\n    email\n    password\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetCategory {\n  category {\n    id\n    description\n    name\n  }\n}"): (typeof documents)["query GetCategory {\n  category {\n    id\n    description\n    name\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetHabitByUser($email: String = \"\") {\n  habit(where: {user: {email: {_eq: $email}}}) {\n    id\n    name\n    user_id\n    description\n    created_at\n    end_date\n    updated_at\n    start_date\n    category {\n      name\n    }\n  }\n}"): (typeof documents)["query GetHabitByUser($email: String = \"\") {\n  habit(where: {user: {email: {_eq: $email}}}) {\n    id\n    name\n    user_id\n    description\n    created_at\n    end_date\n    updated_at\n    start_date\n    category {\n      name\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getUserbyEmail($email: String = \"\") {\n  users(where: {email: {_eq: $email}}) {\n    id\n    email\n    password\n    last_name\n    first_name\n  }\n}"): (typeof documents)["query getUserbyEmail($email: String = \"\") {\n  users(where: {email: {_eq: $email}}) {\n    id\n    email\n    password\n    last_name\n    first_name\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;