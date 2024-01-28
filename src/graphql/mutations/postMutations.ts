import { gql } from "@apollo/client";

const createPostMutation = gql`
  mutation CreatePost($input: PostInputType!) {
    createPost(postInput: $input) {
      id
      createdAt
      updatedAt
      title
      text
      points
      creatorId
    }
  }
`;

const updatePostMutation = gql`
  mutation UpdatePost($id: Int!, $title: String!, $text: String!) {
    updatePost(id: $id, title: $title, text: $text) {
      id
      title
      text
      textSnippet
    }
  }
`;

const voteMutation = gql`
  mutation Vote($value: Int!, $postId: Int!) {
    vote(value: $value, postId: $postId)
  }
`;

const deletePostMutation = gql`
  mutation DeletePost($id: Int!) {
    deletePost(id: $id)
  }
`;

export {
  createPostMutation,
  updatePostMutation,
  voteMutation,
  deletePostMutation,
};
