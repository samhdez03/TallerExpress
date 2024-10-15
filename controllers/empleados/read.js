import Empleados from "../../models/Empleados.js";

//importamos la funcion que tenemos dentro del router y lo guardamos en una funcion
let allEmpleados = async (req, res) => { //peticion tipo request
    try {
        let all = await Empleados.find()   //usamos nuestro modelo
        return res.status(200).json({
            response: all
        })
    }
    catch (error) {
        return res.status(500).json({
            response: error
        })
    }
   
} 

let empleadoPorCargo = async (req, res) => { //peticion tipo request
    try {
        console.log(req.params.cargo)
        let cargoQuery = req.params.cargo //agregamos esto para usar en el filtro
        let all = await Empleados.find({cargo:{$regex: cargoQuery, $options:'i'}})   //usamos nuestro modelo
        return res.status(200).json({
            response: all
        })
    }
    catch (error) {
        return res.status(500).json({
            response: error
        })
    }
   
} 

let empleadosPorRangoSalario = async (req, res) => {
    try {
        let { minSalario, maxSalario } = req.params; // Obtenemos los parámetros del rango
        let empleados = await Empleados.find({
            salario: { $gte: minSalario, $lte: maxSalario } // Filtramos por salario
        });

        return res.status(200).json({
            response: empleados
        });
    } catch (error) {
        return res.status(500).json({
            response: error.message // Enviamos el mensaje de error
        });
    }
};

export  {allEmpleados, empleadoPorCargo, empleadosPorRangoSalario}