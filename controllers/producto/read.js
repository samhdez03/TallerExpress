import Productos from "../../models/Producto.js";

//importamos la funcion que tenemos dentro del router y lo guardamos en una funcion
let allProductos = async (req, res) => { //peticion tipo request
    try {
        let all = await Productos.find()   //usamos nuestro modelo
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

let productoPorMarca = async (req, res) => { //peticion tipo request
    try {
        console.log(req.params.marca)
        let marcaQuery = req.params.marca //agregamos esto para usar en el filtro
        let all = await Productos.find({marca:{$regex: marcaQuery, $options: 'i'}})   //usamos nuestro modelo
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

let productoPorTipo = async (req, res) => { //peticion tipo request
    try {
        console.log(req.params.tipo)
        let tipoQuery = req.params.tipo //agregamos esto para usar en el filtro
        let all = await Productos.find({tipo:{$regex: tipoQuery, $options: 'i'}})   //usamos nuestro modelo
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
export  {allProductos, productoPorMarca, productoPorTipo}