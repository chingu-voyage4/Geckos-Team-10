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
    user: (parent, { _id }, { UserModel }) => {
      return UserModel.findOne({ _id });
    },
    grills: async (parent, args, { GrillModel }) => {
      return (await GrillModel.find({})).map(id_string);
    },
    grill: (parent, { _id }, { GrillModel }) => {
      return GrillModel.findOne({ _id });
    }
  },
  Mutation: {
    createUser: (parent, args, { UserModel }) => {
      const { input } = args;
      const newUser = new UserModel(input);
      return new Promise((resolve, reject) => {
        newUser.save(err => {
          if (err) reject(err);
          else resolve(newUser);
        });
      });
    }
  }
};

export default resolvers;
