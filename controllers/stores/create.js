import Store from "../../models/Store.js";

let create = async (req, res, next) => {
    try {
        let store = req.body
        let all = await Store.create(store)
        return res.status(201).json({
            response:all
        })

    } catch(error){
        next(error)
    }
}

let createMany = async (req, res, next) => {
    try {
        let stores = req.body;

        // Validar que req.body sea un arreglo
        if (!Array.isArray(stores)) {
            next(error)
        }

        let all = await Store.insertMany(stores);
        return res.status(201).json({
            response: all
        });
    } catch (error) {
        next(error)
    }
}

export {create,createMany}