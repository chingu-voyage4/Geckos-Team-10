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
      _id
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

// grill query for the single grill page
export const GET_GRILL = gql`
  query grill($_id: String!) {
    grill(_id: $_id) {
      name
      allImages
      rating
      description
      price_per_hour
      features {
        main
        description
      }
      owner {
        name
        age
        rating
        image
      }
    }
  }
`;
