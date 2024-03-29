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
    "\n  mutation Auth_refresh($refreshToken: String) {\n    auth_refresh(refresh_token: $refreshToken) {\n      access_token\n      expires\n      refresh_token\n    }\n  }\n": types.Auth_RefreshDocument,
    "\n  query Users_me {\n    users_me {\n      title\n      avatar {\n        id\n      }\n    }\n  }\n": types.Users_MeDocument,
    "\n  query Collection($sort: [String]) {\n    collection(sort: $sort, limit: -1) {\n      title\n      id\n      sort\n      parent {\n        id\n      }\n      date_created\n      date_updated\n    }\n  }\n": types.CollectionDocument,
    "\n  mutation Auth_login($email: String!, $password: String!) {\n    auth_login(email: $email, password: $password) {\n      refresh_token\n      expires\n      access_token\n    }\n  }\n": types.Auth_LoginDocument,
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
export function graphql(source: "\n  mutation Auth_refresh($refreshToken: String) {\n    auth_refresh(refresh_token: $refreshToken) {\n      access_token\n      expires\n      refresh_token\n    }\n  }\n"): (typeof documents)["\n  mutation Auth_refresh($refreshToken: String) {\n    auth_refresh(refresh_token: $refreshToken) {\n      access_token\n      expires\n      refresh_token\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Users_me {\n    users_me {\n      title\n      avatar {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query Users_me {\n    users_me {\n      title\n      avatar {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Collection($sort: [String]) {\n    collection(sort: $sort, limit: -1) {\n      title\n      id\n      sort\n      parent {\n        id\n      }\n      date_created\n      date_updated\n    }\n  }\n"): (typeof documents)["\n  query Collection($sort: [String]) {\n    collection(sort: $sort, limit: -1) {\n      title\n      id\n      sort\n      parent {\n        id\n      }\n      date_created\n      date_updated\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Auth_login($email: String!, $password: String!) {\n    auth_login(email: $email, password: $password) {\n      refresh_token\n      expires\n      access_token\n    }\n  }\n"): (typeof documents)["\n  mutation Auth_login($email: String!, $password: String!) {\n    auth_login(email: $email, password: $password) {\n      refresh_token\n      expires\n      access_token\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;