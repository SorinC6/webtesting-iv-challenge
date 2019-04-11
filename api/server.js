const express = require("express");
const helmet = require("helmet");
// const cors = require("cors");

//routes import - nothing for now
//const charRoutes = require("../routes/user-routes");

const server = express();

// server.use(cors());
server.use(helmet());
server.use(express.json());

//server.use(routes)
//server.use(charRoutes);

module.exports = server;
