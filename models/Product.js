import { Schema, model } from "mongoose";  

	// 1. definimos la coleccion
	let collection = 'products'

	// 2. definimos un esquema, recibe un objeto

	let schema = new Schema({
        name: {type:String, required:true},
    	brand: {type:String, required:true},
   		type: {type:String, required:true},
    	price: {type:Number, required:true},
    	
	}, {
    timestamps: true, //es un dato que guarda la fecha de creacion o update
	})

	//creamos el modelo y lo exportamos
	let Product = model(collection, schema)

	export default Product