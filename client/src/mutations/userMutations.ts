import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($name: String!) {
    addUser(name: $name) {
      id
      name
    }
  }
`;
