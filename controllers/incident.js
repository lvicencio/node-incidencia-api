const { param } = require("../app");
const Incident = require("../models/incident");

function holaMundo(req, res){
    console.log("hola qliao weon");
}


async function createIncident(req, res) {
    //console.log("creando incidencia");
    const incident = new Incident();
    const params = req.body;

    incident.title = params.title;
    incident.description = params.description;
    incident.user = params.user;
    incident.severity = params.severity;

    //console.log(incident.title);

    try {

        const incidentStore = await incident.save();

        if (!incidentStore) {
            res.status(400).send({msg:"No se guardo el incidente"});
        } else {
            res.status(200).send({incident: incidentStore});
        }
        
    } catch (error) {
        res.status(500).send(error);
        
    }


}


async function getIncidents(req,res) {
   // console.log("listado de incidencias");
   try {
        const incidents = await Incident.find().sort({create_at:1});

        if (!incidents) {
            res.status(400).send({msg:"Error no se pudo obtener incidencias"});
        } else {
            res.status(200).send(incidents);
        }

   } catch (error) {
        res.status(500).send(error);
   }
}


async function getIncidentsBySeverity(req,res) {
    const params = req.query;
    const severity = params.severity;

    try {
        const incidents = await Incident.find({severity:severity}).sort({create_at:1});

        if (!incidents) {
            res.status(400).send({msg:"Error, incidencia no encontrada"});
        } else {
            res.status(200).send(incidents);
        }

    } catch (error) {
        res.status(500).send(error);
    }

}


async function getIncidentsByState(req,res) {
    const params = req.query;
    const completed = params.completed;

    try {
        const incidents = await Incident.find({completed:completed}).sort({create_at:1});

        if (!incidents) {
            res.status(400).send({msg:"Error, incidencia no encontrada"});
        } else {
            res.status(200).send(incidents);
        }

    } catch (error) {
        res.status(500).send(error);
    }

}


async function updateIncident(req, res) {
    const params = req.body;
    const idIncident = params.id;

    try {
        
        const incident = await Incident.findByIdAndUpdate(idIncident,params);

        if (!incident) {
            res.send(400).send({msg:"No se pudo actualizar la incidencia"});
        } else {
            res.status(200).send({msg:"Se actualizo correctamente"});
        }

    } catch (error) {
        res.status(500).send(error);
    }

}


async function deleteIncident(req, res) {
    const params = req.body;
    const idIncident = params.id;

    try {
        const incident = await Incident.findByIdAndDelete(idIncident);
        if (!incident) {
            res.send(400).send({msg:"No se pudo Eliminar la Incidencia"});
        } else {
            res.status(200).send({msg:"Incidencia Eliminada"});
        }

    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    holaMundo,
    createIncident,
    getIncidents,
    getIncidentsBySeverity,
    getIncidentsByState,
    updateIncident,
    deleteIncident
}