const express = require("express");

const app = express();

app.listen(5000, (req, res) => {
  console.log("Server running on 5000");
});

app.get("/", (req, res) => {
  res.json("My API running 👨🏻‍💻");
});
