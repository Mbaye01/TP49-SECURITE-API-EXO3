const express = require("express");
// import bodyParser from "body-parser";
const app = express();
const port = 3000;

const helmet = require("helmet");
app.use(helmet());

const cors = require("cors");
app.use(
  cors({
    origin: "https://cors.com", // autorise uniquement ce domaine
  })
);

app.get("/api/hello", (req, res) => {
  res.send("Hello world");
});

app.get("/api/hello", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
