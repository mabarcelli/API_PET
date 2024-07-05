
const {request, response}= require ("express");
const { mascotas } = require("../mascotas");


const getMascotas = ( req , res )=>{


    return res.json({
        ok :true,
        statusCode : 200,
        mascotas

    });


}

const getMascotasById = ( req = request , res = response )=>{
    
    let id = parseInt(req.params.id);
    let mascotaABuscar ="";
    mascotaABuscar = mascotas.find((mascota)=>{
        return mascota.id ==id;
    })
    if(mascotaABuscar){
        return res.json({
            ok:true,
            statusCode:200,
            mascotaABuscar
        });
    }else{
        return res.json({
            ok:true,
            statusCode:404,
            msg : "no hay mascotas con esa id"
    });

}
}

module.exports = {
    getMascotas,
    getMascotasById
}