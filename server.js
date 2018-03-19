import express from "express";

const app = express();
const port = process.env.PORT || 3001;

app.get("/api/hello", (req, res) => {
  res.send({ express: "This is the server, Express. How are you?" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
