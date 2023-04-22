import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query getPosts {
    posts {
      id
      content
      user {
        id
        name
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation AddPost($content: String!, $userId: ID!) {
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
