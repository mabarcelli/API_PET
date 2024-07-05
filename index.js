

const express = require("express");

const app = express();
const cors = require("cors");

const puerto = 2006;


//------------------------------------------

const { getMascotas, getMascotasById } = require ("./controllers/mascotas.controllers")

app.use(cors());

app.get("/" , getMascotas )

app.get("/:id", getMascotasById)


//------------------------------------------

app.listen(puerto, ()=>{


    console.log (`servidor arriba en el puerto: ${puerto}`);



});