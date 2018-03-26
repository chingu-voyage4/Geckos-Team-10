import typeDefs from "./typeDefs/typeDefs";
import resovlers from "./Resolvers/resolvers";
import { makeExecutableSchema } from "graphql-tools";

const schema = makeExecutableSchema({
  typeDefs,
  resovlers
});

export default schema;
