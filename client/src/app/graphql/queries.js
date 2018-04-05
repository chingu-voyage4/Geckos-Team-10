import { gql } from "apollo-boost";

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

// grills query...list of grills
export const GET_GRILLS = gql`
  query {
    grills {
      image
      name
      rating
      price_per_hour
      features {
        main
      }
    }
  }
`;
