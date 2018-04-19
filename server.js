import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
const path = require("path");
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
require("dotenv").config();
import jwt from "jsonwebtoken";
import cors from "cors";
import { refreshTokens } from "./server/auth/auth";
import schema from "./server/graphql/schema";
import UserModel from "./server/models/User";
import GrillModel from "./server/models/Grill";

const SECRET = process.env.SECRET;
const SECRET_2 = process.env.SECRET_2;

const app = express();
const port = 4001;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

mongoose.connect(process.env.MONGO_URI, { dbName: "grillber" }, function(
  error
) {
  error
    ? console.log("abort...no fireworks with mongo.", error)
    : console.log("no error on mongo connection");
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo....fireworks!");
});
mongoose.connection.on(
  "error",
  console.error.bind(console, "mongo connection error....")
);

const addUser = async (req, res, next) => {
  const token = req.headers["x-token"];
  if (token) {
    try {
      const { user } = jwt.verify(token, SECRET);
      req.user = user;
    } catch (err) {
      const refreshToken = req.headers["x-refresh-token"];
      const newTokens = await refreshTokens(
        token,
        refreshToken,
        UserModel,
        SECRET,
        SECRET_2
      );
      if (newTokens.token && newTokens.refreshToken) {
        res.set("Access-Control-Expose-Headers", "x-token, x-refresh-token");
        res.set("x-token", newTokens.token);
        res.set("x-refresh-token", newTokens.refreshToken);
      }
      req.user = newTokens.user;
    }
  }
  next();
};

app.use(cors("*"));
app.use(addUser);

// The GraphQL endpoint
app.use(
  "/graphql",
  bodyParser.json(),
  graphqlExpress(req => ({
    schema,
    context: { UserModel, GrillModel, SECRET, SECRET_2, user: req.user }
  }))
);
// GraphiQL, a visual editor for queries
app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

app.listen(port, () => console.log(`Listening on port ${port}`));
