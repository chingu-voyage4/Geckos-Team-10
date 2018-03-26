const typeDefs = [
  `
    type User {
        _id: String, 
        first_name: String, 
        last_name: String, 
        mobile_number: Number, 
        email: String, 
        password: String
    }

    type Query {
        Users: [User]
    }
`
];
// add grills later

export default typeDefs;
