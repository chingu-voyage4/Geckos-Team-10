import typeDefs from "./typeDefs/typeDefs";
import resolvers from "./Resolvers/resolvers";
import { makeExecutableSchema } from "graphql-tools";

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;
