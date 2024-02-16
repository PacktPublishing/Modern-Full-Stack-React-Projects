import { gql } from '@apollo/client/core/index.js'

export const SIGNUP_USER = gql`
  mutation signupUser($username: String!, $password: String!) {
    signupUser(username: $username, password: $password) {
      username
    }
  }
`

export const LOGIN_USER = gql`
  mutation loginUser($username: String!, $password: String!) {
    loginUser(username: $username, password: $password)
  }
`
