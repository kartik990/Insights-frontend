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
    "\n  mutation CreatePost($input: PostInputType!) {\n    createPost(postInput: $input) {\n      id\n      createdAt\n      updatedAt\n      title\n      text\n      points\n      creatorId\n    }\n  }\n": types.CreatePostDocument,
    "\n  mutation UpdatePost($id: Int!, $title: String!, $text: String!) {\n    updatePost(id: $id, title: $title, text: $text) {\n      id\n      title\n      text\n      textSnippet\n    }\n  }\n": types.UpdatePostDocument,
    "\n  mutation Vote($value: Int!, $postId: Int!) {\n    vote(value: $value, postId: $postId)\n  }\n": types.VoteDocument,
    "\n  mutation DeletePost($id: Int!) {\n    deletePost(id: $id)\n  }\n": types.DeletePostDocument,
    "\n  mutation Login($usernameOrEmail: String!, $password: String!) {\n    login(usernameOrEmail: $usernameOrEmail, password: $password) {\n      errors {\n        field\n        message\n      }\n      user {\n        id\n        username\n        email\n      }\n    }\n  }\n": types.LoginDocument,
    "\n  mutation Register($options: UsernamePasswordInput!) {\n    register(options: $options) {\n      errors {\n        field\n        message\n      }\n      user {\n        id\n        username\n      }\n    }\n  }\n": types.RegisterDocument,
    "\n  mutation Logout {\n    logout\n  }\n": types.LogoutDocument,
    "\n  mutation ForgotPassword($email: String!) {\n    forgotPassword(email: $email)\n  }\n": types.ForgotPasswordDocument,
    "\n  mutation ChangePassword($token: String!, $newPassword: String!) {\n    changePassword(token: $token, newPassword: $newPassword) {\n      errors {\n        field\n        message\n      }\n      user {\n        id\n        username\n      }\n    }\n  }\n": types.ChangePasswordDocument,
    "\n  query Me {\n    me {\n      id\n      username\n      email\n      createdAt\n      updatedAt\n    }\n  }\n": types.MeDocument,
    "\n  query Post($id: Int!) {\n    post(id: $id) {\n      id\n      createdAt\n      updatedAt\n      title\n      points\n      text\n      voteStatus\n      creator {\n        id\n        username\n      }\n    }\n  }\n": types.PostDocument,
    "\n  query Posts($limit: Int!, $cursor: String) {\n    posts(limit: $limit, cursor: $cursor) {\n      hasMore\n      posts {\n        id\n        createdAt\n        updatedAt\n        title\n        points\n        textSnippet\n        voteStatus\n        creator {\n          id\n          username\n        }\n      }\n    }\n  }\n": types.PostsDocument,
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
export function graphql(source: "\n  mutation CreatePost($input: PostInputType!) {\n    createPost(postInput: $input) {\n      id\n      createdAt\n      updatedAt\n      title\n      text\n      points\n      creatorId\n    }\n  }\n"): (typeof documents)["\n  mutation CreatePost($input: PostInputType!) {\n    createPost(postInput: $input) {\n      id\n      createdAt\n      updatedAt\n      title\n      text\n      points\n      creatorId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdatePost($id: Int!, $title: String!, $text: String!) {\n    updatePost(id: $id, title: $title, text: $text) {\n      id\n      title\n      text\n      textSnippet\n    }\n  }\n"): (typeof documents)["\n  mutation UpdatePost($id: Int!, $title: String!, $text: String!) {\n    updatePost(id: $id, title: $title, text: $text) {\n      id\n      title\n      text\n      textSnippet\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Vote($value: Int!, $postId: Int!) {\n    vote(value: $value, postId: $postId)\n  }\n"): (typeof documents)["\n  mutation Vote($value: Int!, $postId: Int!) {\n    vote(value: $value, postId: $postId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeletePost($id: Int!) {\n    deletePost(id: $id)\n  }\n"): (typeof documents)["\n  mutation DeletePost($id: Int!) {\n    deletePost(id: $id)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Login($usernameOrEmail: String!, $password: String!) {\n    login(usernameOrEmail: $usernameOrEmail, password: $password) {\n      errors {\n        field\n        message\n      }\n      user {\n        id\n        username\n        email\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation Login($usernameOrEmail: String!, $password: String!) {\n    login(usernameOrEmail: $usernameOrEmail, password: $password) {\n      errors {\n        field\n        message\n      }\n      user {\n        id\n        username\n        email\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Register($options: UsernamePasswordInput!) {\n    register(options: $options) {\n      errors {\n        field\n        message\n      }\n      user {\n        id\n        username\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation Register($options: UsernamePasswordInput!) {\n    register(options: $options) {\n      errors {\n        field\n        message\n      }\n      user {\n        id\n        username\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Logout {\n    logout\n  }\n"): (typeof documents)["\n  mutation Logout {\n    logout\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation ForgotPassword($email: String!) {\n    forgotPassword(email: $email)\n  }\n"): (typeof documents)["\n  mutation ForgotPassword($email: String!) {\n    forgotPassword(email: $email)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation ChangePassword($token: String!, $newPassword: String!) {\n    changePassword(token: $token, newPassword: $newPassword) {\n      errors {\n        field\n        message\n      }\n      user {\n        id\n        username\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation ChangePassword($token: String!, $newPassword: String!) {\n    changePassword(token: $token, newPassword: $newPassword) {\n      errors {\n        field\n        message\n      }\n      user {\n        id\n        username\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Me {\n    me {\n      id\n      username\n      email\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query Me {\n    me {\n      id\n      username\n      email\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Post($id: Int!) {\n    post(id: $id) {\n      id\n      createdAt\n      updatedAt\n      title\n      points\n      text\n      voteStatus\n      creator {\n        id\n        username\n      }\n    }\n  }\n"): (typeof documents)["\n  query Post($id: Int!) {\n    post(id: $id) {\n      id\n      createdAt\n      updatedAt\n      title\n      points\n      text\n      voteStatus\n      creator {\n        id\n        username\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Posts($limit: Int!, $cursor: String) {\n    posts(limit: $limit, cursor: $cursor) {\n      hasMore\n      posts {\n        id\n        createdAt\n        updatedAt\n        title\n        points\n        textSnippet\n        voteStatus\n        creator {\n          id\n          username\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query Posts($limit: Int!, $cursor: String) {\n    posts(limit: $limit, cursor: $cursor) {\n      hasMore\n      posts {\n        id\n        createdAt\n        updatedAt\n        title\n        points\n        textSnippet\n        voteStatus\n        creator {\n          id\n          username\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;