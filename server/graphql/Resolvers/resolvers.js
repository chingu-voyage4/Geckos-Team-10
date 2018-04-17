import { refreshTokens, tryLogin } from "../../auth/auth";

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
    me: (parent, { _id }, { UserModel, user }) => {
      if (user) {
        return UserModel.findOne({ _id: user._id });
      }
      return null;
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
    },
    login: async (
      parent,
      { email, password },
      { UserModel, SECRET, SECRET_2 }
    ) => tryLogin(email, password, UserModel, SECRET, SECRET_2)
  }
};

export default resolvers;
