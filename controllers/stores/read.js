import Store from "../../models/Store.js";

//importamos la funcion que tenemos dentro del router y lo guardamos en una funcion
let allStores = async (req, res, next) => { //peticion tipo request
    try {
        let all = await Store.find()   //usamos nuestro modelo
        return res.status(200).json({
            response: all
        })
    }
    catch (error) {
        next(error)
    }
   
} 

let storeByName = async (req, res, next) => { //peticion tipo request
    try {
        console.log(req.params.name)

        let nameQuery = req.params.name //agregamos esto para usar en el filtro       
        let all = await Store.find({ name:{ $regex: nameQuery,$options: 'i' } //Se utiliza $regex para buscar cualquier documento donde el campo nombre contenga la cadena especificada en nombreQuery.
             // 'i' hace que la búsqueda no distinga entre mayúsculas y minúsculas
        })   //usamos nuestro modelo
        return res.status(200).json({
            response: all
        })
    }
    catch (error) {
        next(error)
    }
   
} 

let storeByAddress = async (req, res, next) => { //peticion tipo request
    try {
        console.log(req.params.address)
        let addressQuery = req.params.address //agregamos esto para usar en el filtro
        let all = await Store.find({address:{$regex: addressQuery, $options: 'i'}})   //usamos nuestro modelo
        return res.status(200).json({
            response: all
        })
    }
    catch (error) {
        next(error)
    }
   
} 
export  {allStores, storeByAddress, storeByName}