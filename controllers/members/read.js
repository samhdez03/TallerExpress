import Member from "../../models/Member.js";

//importamos la funcion que tenemos dentro del router y lo guardamos en una funcion
let allMembers = async (req, res, next) => { //peticion tipo request
    try {
        let all = await Member.find()   //usamos nuestro modelo
        return res.status(200).json({
            response: all
        })
    }
    catch (error) {
        next(error)
    }
   
} 

//creamos una funcion por tipo de membresia
let typeOfMembership = async (req, res, next) => { //peticion tipo request
    try {
        console.log(req.params.type)
        let typeQuery = req.params.type //agregamos esto para usar en el filtro
        let all = await Member.find({typeOfMembership:{$regex: typeQuery, $options: 'i'}})   //usamos nuestro modelo
        return res.status(200).json({
            response: all
        })
    }
    catch (error) {
        next(error)
    }
   
} 
//funcion por monto gastado
let amountByMember = async (req, res, next) => {
    try {
        let { minAmount, maxAmount } = req.params; // Obtenemos los parámetros del rango
        let members = await Member.find({
            amount: { $gte: minAmount, $lte: maxAmount } // Filtramos por salario
        });

        return res.status(200).json({
            response: members
        });
    } catch (error) {
      next(error)
    }
};
export{allMembers, typeOfMembership, amountByMember}