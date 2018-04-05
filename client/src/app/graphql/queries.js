// add new user mutation:... user sign up form
export const NEW_USER = gql`
  mutation createUser($input: UserInput!) {
    createUser(input: $input) {
      first_name
      last_name
      mobile_number
      email
      password
    }
  }
`;
