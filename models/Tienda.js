import { Schema, model } from "mongoose";  

// 1. definimos la coleccion
let collection = 'tiendas'

// 2. definimos un esquema, recibe un objeto

let schema = new Schema({
        nombre: {type:String, required:true},
    	direccion:{type:String, required:true},
   		telefono:{type:Number, required:true},
    	
	}, {
    timestamps: true, //es un dato que guarda la fecha de creacion o update
	})

//creamos el modelo y lo exportamos
let Tienda = model(collection, schema)

export default Tienda