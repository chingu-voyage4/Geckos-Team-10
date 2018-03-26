import express from "express";
require("dotenv").config();
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import schema from "./graphql/schema";

const app = express();
const port = 4001;

mongoose.connect(process.env.MONGO_URI);
mongoose.connection.once("open", () => {
  console.log("connected to mongo....fireworks!");
});
mongoose.connection.on(
  "error",
  console.error.bind(console, "mongo connection error....")
);

// The GraphQL endpoint
app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));
// GraphiQL, a visual editor for queries
app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

// debuggin use
app.get("/api/hello", (req, res) => {
  res.send({ express: "This is the server, Express. How are you?" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
