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


module.exports = {
    holaMundo,
    createIncident,
    getIncidents
}