// 1. 
import "dotenv/config.js"; //conexion a la base de datos
// 2. configuracion para la conexion a la BD
import '../../config/database.js'
// 3. importamos el modelo de la base de datos
import Member from '../Member.js'

let members = [
    {name: "Alice", typeOfMembership: "Gold", numberOfPurchases: 15, amount: 300.50},
    {name: "Bob", typeOfMembership: "Silver", numberOfPurchases: 10, amount: 200.00},
    {name: "Charlie", typeOfMembership: "Bronze", numberOfPurchases: 5, amount: 75.25},
    {name: "Diana", typeOfMembership: "Gold", numberOfPurchases: 20, amount: 500.00},
    {name: "Edward", typeOfMembership: "Silver", numberOfPurchases: 12, amount: 150.75},
    {name: "Fiona", typeOfMembership: "Bronze", numberOfPurchases: 7, amount: 90.00},
    {name: "George", typeOfMembership: "Gold", numberOfPurchases: 18, amount: 420.00},
    {name: "Hannah", typeOfMembership: "Silver", numberOfPurchases: 11, amount: 180.30},
    {name: "Ian", typeOfMembership: "Bronze", numberOfPurchases: 6, amount: 60.50},
    {name: "Jack", typeOfMembership: "Gold", numberOfPurchases: 25, amount: 600.00},
    {name: "Kate", typeOfMembership: "Silver", numberOfPurchases: 14, amount: 220.40},
    {name: "Leo", typeOfMembership: "Bronze", numberOfPurchases: 8, amount: 110.00},
    {name: "Mia", typeOfMembership: "Gold", numberOfPurchases: 22, amount: 480.00},
    {name: "Nora", typeOfMembership: "Silver", numberOfPurchases: 13, amount: 195.10},
    {name: "Owen", typeOfMembership: "Bronze", numberOfPurchases: 9, amount: 95.00},
    {name: "Paula", typeOfMembership: "Gold", numberOfPurchases: 30, amount: 700.50},
    {name: "Quinn", typeOfMembership: "Silver", numberOfPurchases: 16, amount: 260.25},
    {name: "Ray", typeOfMembership: "Bronze", numberOfPurchases: 4, amount: 50.00},
    {name: "Sara", typeOfMembership: "Gold", numberOfPurchases: 19, amount: 350.80},
    {name: "Tom", typeOfMembership: "Silver", numberOfPurchases: 17, amount: 270.90},
    {name: "Uma", typeOfMembership: "Bronze", numberOfPurchases: 3, amount: 45.00},
    {name: "Victor", typeOfMembership: "Gold", numberOfPurchases: 28, amount: 620.00},
    {name: "Wendy", typeOfMembership: "Silver", numberOfPurchases: 15, amount: 235.00},
    {name: "Xander", typeOfMembership: "Bronze", numberOfPurchases: 2, amount: 30.00},
    {name: "Yara", typeOfMembership: "Gold", numberOfPurchases: 21, amount: 450.50},
    {name: "Zoe", typeOfMembership: "Silver", numberOfPurchases: 12, amount: 180.00},
    {name: "Alice", typeOfMembership: "Gold", numberOfPurchases: 16, amount: 310.00},
    {name: "Bob", typeOfMembership: "Silver", numberOfPurchases: 10, amount: 200.50},
    {name: "Charlie", typeOfMembership: "Bronze", numberOfPurchases: 5, amount: 70.00},
    {name: "Diana", typeOfMembership: "Gold", numberOfPurchases: 20, amount: 490.00},
    {name: "Edward", typeOfMembership: "Silver", numberOfPurchases: 12, amount: 175.25}
]


//ejecutamos la funcion de mongoose de insert many
Member.insertMany(members)
