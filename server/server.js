import express from "express";
require("dotenv").config();

const app = express();
const port = 4001;

app.get("/api/hello", (req, res) => {
  res.send({ express: "This is the server, Express. How are you?" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
