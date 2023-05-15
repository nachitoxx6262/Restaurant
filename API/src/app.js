const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/index.js");

require("./db.js");


const server = express();
server.name = "API";
server.use(morgan("dev"));
server.use(cors());
server.use("/", routes);
server.use(cors());
// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
