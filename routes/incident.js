const express = require("express")
const IncidentController = require("../controllers/incident");

const api = express.Router();

api.get("/holamundo",IncidentController.holaMundo);
api.post("/createIncident", IncidentController.createIncident);
api.get("/listIncidents", IncidentController.getIncidents);
api.get("/incidentsbyseverity",IncidentController.getIncidentsBySeverity);
api.get("/incidentsbystate",IncidentController.getIncidentsByState);
api.put("/updateincident",IncidentController.updateIncident);
api.delete("/deleteincident", IncidentController.deleteIncident);

module.exports = api;