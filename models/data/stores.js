// 1. 
import "dotenv/config.js"; //conexion a la base de datos
// 2. configuracion para la conexion a la BD
import '../../config/database.js'
// 3. importamos el modelo de la base de datos
import Store from '../Store.js'
let stores = [
    { name: "ElectroWorld", address: "Av. del Libertador 1001, Buenos Aires", phone: 5551234 },
    { name: "Fashion and Style", address: "Gran Via Street 45, Madrid", phone: 5555678 },
    { name: "Home Furniture", address: "Esperanza Street 33, Mexico City", phone: 5558765 },
    { name: "Toys R Us", address: "9 de Julio Av. 2345, Buenos Aires", phone: 5554321 },
    { name: "Sports and More", address: "February 5 Street 78, Guadalajara", phone: 5559876 },
    { name: "Save Supermarket", address: "Peace Street 120, Lima", phone: 5556543 },
    { name: "Beauty and Cosmetics", address: "Republic Street 56, Santiago", phone: 5553456 },
    { name: "The Knowledge Bookstore", address: "42nd Street, Bogotá", phone: 5557890 },
    { name: "Unique Accessories", address: "Reforma Av. 100, Mexico City", phone: 5552468 },
    { name: "Casual Clothing", address: "Friendship Street 89, Quito", phone: 5551357 },
    { name: "Technology and Gadgets", address: "May 25 Street 110, Buenos Aires", phone: 5558642 },
    { name: "Shoe Store", address: "Florida Street 234, Buenos Aires", phone: 5557531 },
    { name: "Home and Garden", address: "Jalisco Street 45, Monterrey", phone: 5556420 },
    { name: "Children's Corner", address: "10th Street, Santiago", phone: 5555319 },
    { name: "Ideal Decoration", address: "Brazil Av. 400, Valparaíso", phone: 5554208 },
    { name: "Flavor Café", address: "Mayor Street 22, Madrid", phone: 5553197 },
    { name: "Toys and Dreams", address: "Moon Street 77, La Paz", phone: 5552086 },
    { name: "Personal Care", address: "Figueroa Street 100, San José", phone: 5550975 },
    { name: "Office Supplies", address: "Commerce Street 55, Caracas", phone: 5559864 },
    { name: "Everything for the Home", address: "San Martín Av. 500, Buenos Aires", phone: 5558753 }
]

//ejecutamos la funcion de mongoose de insert many
Store.insertMany(stores)