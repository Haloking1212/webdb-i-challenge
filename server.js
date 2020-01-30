const express = require('express');

const db = require('./data/dbConfig.js');

const accountRouter = require("./account-router")

const server = express();
server.use(express.json());

server.use("/", accountRouter);

module.exports = server;