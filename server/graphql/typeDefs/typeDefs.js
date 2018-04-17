const typeDefs = [
  `
    type User {
        _id: String, 
        first_name: String, 
        last_name: String, 
        mobile_number: String, 
        email: String, 
        password: String
    }

    input UserInput {
        first_name: String, 
        last_name: String, 
        mobile_number: String, 
        email: String, 
        password: String
    }

    type Grill {
        _id: String, 
        image: String, 
        allImages: [String]
        name: String, 
        description: String
        grill_racks: Int, 
        fuel: String, 
        rating: Int, 
        features: [Feature],
        max_avail_hours: Int, 
        owner: Owner, 
        price_per_hour: Int
    }

    type Feature {
        main: String, 
        description: String
    }

    type Owner {
        name: String, 
        age: Int, 
        mobile_number: Int, 
        rating: Int, 
        image: String
    }
     
    type AuthPayload {
        token: String!
        refreshToken: String!
    }
    
    type Query {
        users: [User],
        user(_id: String!): User,
        grills: [Grill],
        grill(_id: String!): Grill
    }

    type Mutation {
        createUser(input: UserInput): User, 
        login(email: String!, password: String!): AuthPayload!,
        refreshTokens(token: String!, refreshToken: String!): AuthPayload!,        
    }
`
];

export default typeDefs;
