// 1. 
import "dotenv/config.js"; //conexion a la base de datos
// 2. configuracion para la conexion a la BD
import '../../config/database.js'
// 3. importamos el modelo de la base de datos
import Supplier from '../Supplier.js'

let suppliers = [
    {name: "Tech Supplies Inc.", typeOfProducts: "Electronics", phone: 5551234567, contactPerson: "Alice Smith"},
    {name: "Fashion Hub", typeOfProducts: "Apparel", phone: 5552345678, contactPerson: "Bob Johnson"},
    {name: "Fresh Foods Co.", typeOfProducts: "Groceries", phone: 5553456789, contactPerson: "Cathy Brown"},
    {name: "Handy Tools Ltd.", typeOfProducts: "Tools", phone: 5554567890, contactPerson: "David Wilson"},
    {name: "Comfort Furniture", typeOfProducts: "Furniture", phone: 5555678901, contactPerson: "Eva Martinez"},
    {name: "Toy World", typeOfProducts: "Toys", phone: 5556789012, contactPerson: "Frank Garcia"},
    {name: "Gadget Galaxy", typeOfProducts: "Electronics", phone: 5557890123, contactPerson: "Grace Lee"},
    {name: "Style Boutique", typeOfProducts: "Apparel", phone: 5558901234, contactPerson: "Hannah Taylor"},
    {name: "Green Grocer", typeOfProducts: "Groceries", phone: 5559012345, contactPerson: "Ian Wilson"},
    {name: "Pro Tools Warehouse", typeOfProducts: "Tools", phone: 5550123456, contactPerson: "Jack Young"},
    {name: "Modern Living", typeOfProducts: "Furniture", phone: 5551234568, contactPerson: "Kathy Adams"},
    {name: "Playtime Toys", typeOfProducts: "Toys", phone: 5552345679, contactPerson: "Leo Robinson"},
    {name: "Electro Mart", typeOfProducts: "Electronics", phone: 5553456780, contactPerson: "Mia Clark"},
    {name: "Chic Fashion", typeOfProducts: "Apparel", phone: 5554567891, contactPerson: "Nora Lewis"},
    {name: "Healthy Eats", typeOfProducts: "Groceries", phone: 5555678902, contactPerson: "Owen Walker"},
    {name: "Tool Masters", typeOfProducts: "Tools", phone: 5556789013, contactPerson: "Paula Hall"},
    {name: "Elegant Interiors", typeOfProducts: "Furniture", phone: 5557890124, contactPerson: "Quinn Allen"},
    {name: "Fun Zone Toys", typeOfProducts: "Toys", phone: 5558901235, contactPerson: "Ray Martinez"},
    {name: "Smart Gadgets", typeOfProducts: "Electronics", phone: 5559012346, contactPerson: "Sara King"},
    {name: "Urban Style", typeOfProducts: "Apparel", phone: 5550123457, contactPerson: "Tom White"}
]


//ejecutamos la funcion de mongoose de insert many
Supplier.insertMany(suppliers)