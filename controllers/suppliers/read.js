import Supplier from "../../models/Supplier.js";

//funcion para todos los proveedores
let allSupliers = async (req, res, next) => {
    try {
        let all= await Supplier.find()
        return res.status(200).json({
            response: all
        })     
    } catch(error){
        next(error);

    }
}

let typeOfProducts = async (req, res, next)=> {
    try {
        let typeQuery = req.params.type
        let all = await Supplier.find({typeOfProducts:{$regex:typeQuery,$options:'i'}})
        return res.status(200).json({
            response: all
        })

    } catch (error){
        next(error);
    }
}

let supplierByContact = async (req, res, next) => { 
    try {
        
        let contactQuery = req.params.contact //agregamos esto para usar en el filtro       
        let all = await Supplier.find({ contactPerson:{ $regex: contactQuery,$options: 'i' } //Se utiliza $regex para buscar cualquier documento donde el campo nombre contenga la cadena especificada en nombreQuery.
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

export {allSupliers, typeOfProducts, supplierByContact}