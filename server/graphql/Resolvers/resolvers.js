import mongoose from "mongoose";

// users collection
const Users = mongoose.connection.collection("users");

// prepare mongo's _id to a string type
const id_string = o => {
  o._id = o._id.toString();
  return o;
};

const resolvers = {
  Query: {
    users: async () => {
      return await Users.find({})
        .toArray()
        .map(id_string);
    }
  }
};

export default resolvers;
