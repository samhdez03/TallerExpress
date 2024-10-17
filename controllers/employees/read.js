import Employe from "../../models/Employe.js";

//importamos la funcion que tenemos dentro del router y lo guardamos en una funcion
let allEmploye = async (req, res, next) => { //peticion tipo request
    try {
        let all = await Employe.find()   //usamos nuestro modelo
        return res.status(200).json({
            response: all
        })
    }
    catch (error) {
        next(error)
    }
   
} 

let employeByPosition = async (req, res, next) => { //peticion tipo request
    try {
        console.log(req.params.position)
        let positionQuery = req.params.position //agregamos esto para usar en el filtro
        let all = await Employe.find({position:{$regex: positionQuery, $options:'i'}})   //usamos nuestro modelo
        return res.status(200).json({
            response: all
        })
    }
    catch (error) {
        next(error)
    }
   
} 

let employeeBySalaryRange = async (req, res, next) => {
    try {
        let { minSalary, maxSalary } = req.params; // Obtenemos los parámetros del rango
        let employees = await Employe.find({
            salary: { $gte: minSalary, $lte: maxSalary } // Filtramos por salario
        });

        return res.status(200).json({
            response: employees
        });
    } catch (error) {
      next(error)
    }
};

export  {allEmploye, employeByPosition, employeeBySalaryRange}