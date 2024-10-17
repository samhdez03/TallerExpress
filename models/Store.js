import { Schema, model } from "mongoose";  

// 1. definimos la coleccion
let collection = 'stores'

// 2. definimos un esquema, recibe un objeto

let schema = new Schema({
        name: {type:String, required:true},
    	address:{type:String, required:true},
   		phone:{type:Number, required:true},
    	
	}, {
    timestamps: true, //es un dato que guarda la fecha de creacion o update
	})

//creamos el modelo y lo exportamos
let Store = model(collection, schema)

export default Store