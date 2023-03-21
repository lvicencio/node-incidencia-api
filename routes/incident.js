const express = require("express")
const IncidentController = require("../controllers/incident");

const api = express.Router();

api.get("/holamundo",IncidentController.holaMundo);

module.exports = api;