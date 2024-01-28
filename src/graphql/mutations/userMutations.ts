import { gql } from "@apollo/client";

const loginMutation = gql`
  mutation Login($usernameOrEmail: String!, $password: String!) {
    login(usernameOrEmail: $usernameOrEmail, password: $password) {
      errors {
        field
        message
      }
      user {
        id
        username
        email
      }
    }
  }
`;

const registerMutation = gql`
  mutation Register($options: UsernamePasswordInput!) {
    register(options: $options) {
      errors {
        field
        message
      }
      user {
        id
        username
      }
    }
  }
`;

const logoutMutation = gql`
  mutation Logout {
    logout
  }
`;

const forgotPasswordMutation = gql`
  mutation ForgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`;

const changePasswordMutation = gql`
  mutation ChangePassword($token: String!, $newPassword: String!) {
    changePassword(token: $token, newPassword: $newPassword) {
      errors {
        field
        message
      }
      user {
        id
        username
      }
    }
  }
`;

export {
  loginMutation,
  registerMutation,
  logoutMutation,
  changePasswordMutation,
  forgotPasswordMutation,
};
