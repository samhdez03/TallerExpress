import { Schema, model } from "mongoose";  

	// 1. definimos la coleccion
	let collection = 'empleados'

	// 2. definimos un esquema, recibe un objeto

	let schema = new Schema({
        nombre: {type:String, required:true},
   		cargo: {type:String, required:true},
    	salario: {type:Number, required:true},
    	
	}, {
    timestamps: true, //es un dato que guarda la fecha de creacion o update
	})


	//creamos el modelo y lo exportamos
	let Empleado = model(collection, schema)

	export default Empleado