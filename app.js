const express = require("express");
const app = express();

module.exports = app;

const incident_routes = require("./routes/incident");

app.use("/api",incident_routes);