import { gql } from '@apollo/client';

export const ADD_POST = gql`
  mutation addPost($content: String!, $userId: ID!) {
    addPost(content: $content, userId: $userId) {
      id
      content
      user {
        id
        name
      }
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id) {
      id
      content
      user {
        id
        name
      }
    }
  }
`;
