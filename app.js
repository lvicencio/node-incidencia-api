const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

module.exports = app;

const incident_routes = require("./routes/incident");

app.use("/api",incident_routes);