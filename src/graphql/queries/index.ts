import { gql } from "@apollo/client";

export const meQuery = gql`
  query Me {
    me {
      id
      username
      email
      createdAt
      updatedAt
    }
  }
`;

export const postQuery = gql`
  query Post($id: Int!) {
    post(id: $id) {
      id
      createdAt
      updatedAt
      title
      points
      text
      voteStatus
      creator {
        id
        username
      }
    }
  }
`;

export const postsQuery = gql`
  query Posts($limit: Int!, $cursor: String) {
    posts(limit: $limit, cursor: $cursor) {
      hasMore
      posts {
        id
        createdAt
        updatedAt
        title
        points
        textSnippet
        voteStatus
        creator {
          id
          username
        }
      }
    }
  }
`;
