const express = require("express");
const routes = require("./src/routes/index.js");

const app = express();
app.use(express.json());

routes(app);

module.exports = app;