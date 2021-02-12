import { gql } from "@apollo/client";

const LOGIN = gql`
  mutation DoLogin($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
    }
  }
`;

export { LOGIN };
