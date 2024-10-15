import Tienda from "../../models/Tienda.js";

//importamos la funcion que tenemos dentro del router y lo guardamos en una funcion
let allTiendas = async (req, res) => { //peticion tipo request
    try {
        let all = await Tienda.find()   //usamos nuestro modelo
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

let tiendaPorNombre = async (req, res) => { //peticion tipo request
    try {
        console.log(req.params.nombre)
        let nombreQuery = req.params.nombre //agregamos esto para usar en el filtro
        let all = await Tienda.find({ nombre: { $regex: nombreQuery, //Se utiliza $regex para buscar cualquier documento donde el campo nombre contenga la cadena especificada en nombreQuery.
            $options: 'i' } // 'i' hace que la búsqueda no distinga entre mayúsculas y minúsculas
        })   //usamos nuestro modelo
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

let tiendaPorDireccion = async (req, res) => { //peticion tipo request
    try {
        console.log(req.params.direccion)
        let direccionQuery = req.params.direccion //agregamos esto para usar en el filtro
        let all = await Tienda.find({direccion:{$regex: direccionQuery, $options: 'i'}})   //usamos nuestro modelo
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
export  {allTiendas, tiendaPorDireccion, tiendaPorNombre}