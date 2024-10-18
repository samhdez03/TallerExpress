// 1. 
import "dotenv/config.js"; //conexion a la base de datos
// 2. configuracion para la conexion a la BD
import '../../config/database.js'

// 3. importamos el modelo de la base de datos
import Employe from '../Employe.js'
let employees = [
    
        { name: "Juan Pérez", position: "Manager", salary: 50000 },
        { name: "Ana Gómez", position: "Analist", salary: 35000 },
        { name: "Carlos López", position: "Developer", salary: 40000 },
        { name: "María Torres", position: "Designer", salary: 30000 },
        { name: "Luis Martínez", position: "Accountant", salary: 45000 },
        { name: "Sofía Hernández", position: "Human Resources", salary: 38000 },
        { name: "Pedro Ruiz", position: "Marketing", salary: 42000 },
        { name: "Laura Jiménez", position: "Administrative", salary: 32000 },
        { name: "Javier Castro", position: "Engineer", salary: 48000 },
        { name: "Valeria Sánchez", position: "Assistant", salary: 28000 },
        { name: "Diego Morales", position: "Designer", salary: 39000 },
        { name: "Claudia Vega", position: "Data Analyst", salary: 41000 },
        { name: "Fernando Castillo", position: "Project Manager", salary: 55000 },
        { name: "Paola Ruiz", position: "Researcher", salary: 46000 },
        { name: "Gabriel Herrera", position: "Web Developer", salary: 43000 },
        { name: "Isabel Ortega", position: "Support", salary: 37000 },
        { name: "Arturo Salazar", position: "Software Engineer", salary: 52000 },
        { name: "Carolina Mendoza", position: "Coordinator", salary: 49000 },
        { name: "Samuel Pérez", position: "Product Manager", salary: 60000 }
    
    
];

//ejecutamos la funcion de mongoose de insert many
Employe.insertMany(employees)
