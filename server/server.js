import express from "express";
require("dotenv").config();
import mongoose from "mongoose";

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

app.get("/api/hello", (req, res) => {
  res.send({ express: "This is the server, Express. How are you?" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
