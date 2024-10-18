import Supplier from "../../models/Supplier.js";

let create = async (req, res, next) => {
    try {
        let supplier = req.body
        let all = await Supplier.create(supplier)
        return res.status(201).json({
            response:all
        })

    } catch(error){
        next(error)

    }
}

let createMany = async (req, res, next) => {
    try {
        let suppliers = req.body;
        // Validar que req.body sea un arreglo
        if (!Array.isArray(suppliers)) {
            next(error)
        }

        let all = await Supplier.insertMany(suppliers);
        return res.status(201).json({
            response: all
        });
    } catch (error) {
        next(error)
    }
}

export {create,createMany}