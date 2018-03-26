const typeDefs = [
  `
    type User {
        _id: String, 
        first_name: String, 
        last_name: String, 
        mobile_number: Int, 
        email: String, 
        password: String
    }

    type Query {
        users: [User]
    }
`
];
// add grills later

export default typeDefs;
