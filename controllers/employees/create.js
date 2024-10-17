import Employe from "../../models/Employe.js";

let create = async (req, res, next) => {
    try {
        let employe = req.body
        let all = await Employe.create(employe)
        return res.status(201).json({
            response:all
        })

    } catch(error){
        next(error)

    }
}

let createMany = async (req, res, next) => {
    try {
        let employees = req.body;

        // Validar que req.body sea un arreglo
        if (!Array.isArray(employees)) {
            next(error)
        }

        let all = await Employe.insertMany(employees);
        return res.status(201).json({
            response: all
        });
    } catch (error) {
        next(error)
    }
}

export {create,createMany}