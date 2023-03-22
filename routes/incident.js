const express = require("express")
const IncidentController = require("../controllers/incident");

const api = express.Router();

api.get("/holamundo",IncidentController.holaMundo);
api.post("/createIncident", IncidentController.createIncident);
api.get("/listIncidents", IncidentController.getIncidents);

module.exports = api;