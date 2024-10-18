import { Schema, model } from "mongoose";  

// 1. definimos la coleccion
let collection = 'members'

// 2. definimos un esquema, recibe un objeto

let schema = new Schema({
    name: {type:String, required:true},
	typeOfMembership: {type:String, required:true},
	numberOfPurchases: {type:Number, required:true},
	amount: {type:Number, required:true},
    	
}, {
    timestamps: true, //es un dato que guarda la fecha de creacion o update
})

//creamos el modelo y lo exportamos
let Member = model(collection, schema)

export default Member