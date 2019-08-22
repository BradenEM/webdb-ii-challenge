const express = require("express");
const server = express();
const carsRouter = require("./cars/carsRouter");

server.use(express.json());
server.use("/api/cars", carsRouter);

server.get("/", (req, res) => {
  res.send(`<h1>SQLITE STUDIO CHALLENGE<h1>`);
});

module.exports = server;
