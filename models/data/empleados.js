// 1. 
import "dotenv/config.js"; //conexion a la base de datos
// 2. configuracion para la conexion a la BD
import '../../config/database.js'
import mongoose from 'mongoose'; // Importar mongoose

// 3. importamos el modelo de la base de datos
import Empleado from '../Empleados.js'
let empleados = [
    
        { nombre: "Juan Pérez", cargo: "Gerente", salario: 50000 },
        { nombre: "Ana Gómez", cargo: "Analista", salario: 35000 },
        { nombre: "Carlos López", cargo: "Desarrollador", salario: 40000 },
        { nombre: "María Torres", cargo: "Diseñadora", salario: 30000 },
        { nombre: "Luis Martínez", cargo: "Contador", salario: 45000 },
        { nombre: "Sofía Hernández", cargo: "Recursos Humanos", salario: 38000 },
        { nombre: "Pedro Ruiz", cargo: "Marketing", salario: 42000 },
        { nombre: "Laura Jiménez", cargo: "Administrativa", salario: 32000 },
        { nombre: "Javier Castro", cargo: "Ingeniero", salario: 48000 },
        { nombre: "Valeria Sánchez", cargo: "Asistente", salario: 28000 },
        { nombre: "Diego Morales", cargo: "Vendedor", salario: 39000 },
        { nombre: "Claudia Vega", cargo: "Analista de datos", salario: 41000 },
        { nombre: "Fernando Castillo", cargo: "Gerente de proyectos", salario: 55000 },
        { nombre: "Paola Ruiz", cargo: "Investigadora", salario: 46000 },
        { nombre: "Gabriel Herrera", cargo: "Desarrollador web", salario: 43000 },
        { nombre: "Isabel Ortega", cargo: "Técnica de soporte", salario: 37000 },
        { nombre: "Arturo Salazar", cargo: "Arquitecto de software", salario: 52000 },
        { nombre: "Carolina Mendoza", cargo: "Coordinadora", salario: 49000 },
        { nombre: "Samuel Pérez", cargo: "Product Manager", salario: 60000 }
    
    
];

  //ejecutamos la funcion de mongoose de insert many
  Empleado.insertMany(empleados)

  const insertEmpleados = async () => {
        try {
           
            await Empleado.insertMany(empleados); // Insertar los empleados
            console.log('Datos insertados correctamente');
        } catch (error) {
            console.error('Error al insertar datos:', error);
        } 
    };
    insertEmpleados();