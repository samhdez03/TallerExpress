import Product from "../../models/Product.js";

let create = async (req, res, next) => {
    try {
        let product = req.body
        let all = await Product.create(product)
        return res.status(201).json({
            response:all
        })

    } catch(error){
        next(error)

    }
}

let createMany = async (req, res, next) => {
    try {
        let products = req.body;

        // Validar que req.body sea un arreglo
        if (!Array.isArray(products)) {
            next(error)
        }

        let all = await Product.insertMany(products);
        return res.status(201).json({
            response: all
        });
    } catch (error) {
        next(error)
    }
}

export {create,createMany}