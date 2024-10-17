import { Schema, model } from "mongoose";  

	// 1. definimos la coleccion
	let collection = 'employees'

	// 2. definimos un esquema, recibe un objeto

	let schema = new Schema({
        name: {type:String, required:true},
   		position: {type:String, required:true},
    	salary: {type:Number, required:true},
    	
	}, {
    timestamps: true, //es un dato que guarda la fecha de creacion o update
	})


	//creamos el modelo y lo exportamos
	let Employe = model(collection, schema)

	export default Employe