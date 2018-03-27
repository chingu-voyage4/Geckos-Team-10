// prepare mongo's _id to a string type
const id_string = o => {
  o._id = o._id.toString();
  return o;
};

const resolvers = {
  Query: {
    users: async (parent, args, { UserModel }) => {
      return (await UserModel.find({})).map(id_string);
    },
    grills: async (parent, args, { GrillModel }) => {
      return (await GrillModel.find({})).map(id_string);
    },
    grill: (parent, { name }, { GrillModel }) => {
      return GrillModel.findOne({ name });
    }
  }
};

export default resolvers;
