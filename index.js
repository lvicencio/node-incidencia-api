const port = 3000;
const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();

const urlMongoDb ="mongodb+srv://admin:admin1234@ticket-api.5umtfw4.mongodb.net/ticket-api?retryWrites=true&w=majority";
//"mongodb+srv://admin:admin1234@ticket-api.5umtfw4.mongodb.net/ticket-api";

//mongodb+srv://admin:<password>@ticket-api.5umtfw4.mongodb.net/ticket-api?retryWrites=true&w=majority





mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("conectado a mongo atlas"))
    .catch((error)=>console.log(error));

    app.listen(port, ()=>{
        console.log("Server funcionando en http://localhost:"+ port);
    })

/* mongoose
    .connect('urlMongoDb').then(()=> console.log("conectado a db"))
    .catch (error => console.error(error));


    app.listen(port, ()=>{
        console.log("Server funcionando en http://localhost:"+ port);
    }) */

 /* mongoose.connect(urlMongoDb,(err,res)=>{

    try {
        if (err) {
            throw err;
        } else {
            console.log("Conexion establecida");

            
            app.listen(port, ()=>{
                console.log("Server funcionando en http://localhost:"+ port);
            })

        }
    } catch (error) {
        console.log(error);
    }

}) 
 */