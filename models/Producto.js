import { Schema, model } from "mongoose";  

	// 1. definimos la coleccion
	let collection = 'producto'

	// 2. definimos un esquema, recibe un objeto

	let schema = new Schema({
        nombre: {type:String, required:true},
    	marca: {type:String, required:true},
   		tipo: {type:String, required:true},
    	precio: {type:Number, required:true},
    	
	}, {
    timestamps: true, //es un dato que guarda la fecha de creacion o update
	})

	//creamos el modelo y lo exportamos
	let Producto = model(collection, schema)

	export default Producto