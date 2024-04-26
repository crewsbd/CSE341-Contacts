// This file combines all route definitions.
const route = require("express").Router();

// Sub routes
route.use("/users", require("./users"));

// Default route
route.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = route;