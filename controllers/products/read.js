import Product from "../../models/Product.js";

//importamos la funcion que tenemos dentro del router y lo guardamos en una funcion
let allProducts = async (req, res, next) => { //peticion tipo request
    try {
        let all = await Product.find()   //usamos nuestro modelo
        return res.status(200).json({
            response: all
        })
    }
    catch (error) {
        next(error)
    }
   
} 

let productByBrand = async (req, res,next) => { //peticion tipo request
    try {
        console.log(req.params.brand)
        let brandQuery = req.params.brand //agregamos esto para usar en el filtro
        let all = await Product.find({brand:{$regex: brandQuery, $options: 'i'}})   //usamos nuestro modelo
        return res.status(200).json({
            response: all
        })
    }
    catch (error) {
        next(error)
    }
   
} 

let productByType = async (req, res, next) => { //peticion tipo request
    try {
        console.log(req.params.type)
        let typeQuery = req.params.type //agregamos esto para usar en el filtro
        let all = await Product.find({type:{$regex: typeQuery, $options: 'i'}})   //usamos nuestro modelo
        return res.status(200).json({
            response: all
        })
    }
    catch (error) {
        next(error)
    }
   
} 
export  {allProducts, productByBrand, productByType}