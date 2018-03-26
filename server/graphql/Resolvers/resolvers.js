// prepare mongo's _id to a string type
const id_string = o => {
  o._id = o._id.toString();
  return o;
};

const resolvers = {
  Query: {
    users: async (parent, args, { UserModel }) => {
      return (await UserModel.find({})).map(id_string);
    }
  }
};

export default resolvers;
