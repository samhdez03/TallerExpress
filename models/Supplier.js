import { Schema, model } from "mongoose";  

// 1. definimos la coleccion
let collection = 'suppliers'

// 2. definimos un esquema, recibe un objeto

let schema = new Schema({
    name: {type:String, required:true},
	typeOfProducts: {type:String, required:true},
	contactPerson: {type:String, required:true},
	phone: {type:Number, required:true}
    	
}, {
    timestamps: true, //es un dato que guarda la fecha de creacion o update
})

//creamos el modelo y lo exportamos
let Supplier = model(collection, schema)

export default Supplier