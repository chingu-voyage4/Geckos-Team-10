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

    type Grill {
        _id: String, 
        image: String, 
        name: String, 
        grill_racks: Int, 
        fuel: String, 
        rating: Int, 
        features: [Feature],
        max_avail_hours: Int, 
        owner: Owner
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
    
    type Query {
        users: [User],
        grills: [Grill]
    }
`
];

export default typeDefs;
