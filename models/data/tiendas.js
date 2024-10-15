// 1. 
import "dotenv/config.js"; //conexion a la base de datos
// 2. configuracion para la conexion a la BD
import '../../config/database.js'
// 3. importamos el modelo de la base de datos
import Tienda from '../Tienda.js'
let tiendas = [
    { nombre: "ElectroWorld", direccion: "Av. del Libertador 1001, Buenos Aires", telefono: 5551234 },
    { nombre: "Moda y Estilo", direccion: "Calle Gran Via 45, Madrid", telefono: 5555678 },
    { nombre: "Muebles del Hogar", direccion: "Calle de la Esperanza 33, Ciudad de México", telefono: 5558765 },
    { nombre: "Toys R Us", direccion: "Av. 9 de Julio 2345, Buenos Aires", telefono: 5554321 },
    { nombre: "Deportes y Más", direccion: "Calle 5 de Febrero 78, Guadalajara", telefono: 5559876 },
    { nombre: "Supermercado Ahorra", direccion: "Calle de la Paz 120, Lima", telefono: 5556543 },
    { nombre: "Belleza y Cosméticos", direccion: "Calle de la República 56, Santiago", telefono: 5553456 },
    { nombre: "Librería El Saber", direccion: "Calle 42, Bogotá", telefono: 5557890 },
    { nombre: "Accesorios Únicos", direccion: "Av. Reforma 100, Ciudad de México", telefono: 5552468 },
    { nombre: "Ropa Casual", direccion: "Calle de la Amistad 89, Quito", telefono: 5551357 },
    { nombre: "Tecnología y Gadgets", direccion: "Calle 25 de Mayo 110, Buenos Aires", telefono: 5558642 },
    { nombre: "Tienda de Calzado", direccion: "Calle Florida 234, Buenos Aires", telefono: 5557531 },
    { nombre: "Hogar y Jardín", direccion: "Calle Jalisco 45, Monterrey", telefono: 5556420 },
    { nombre: "Rincón Infantil", direccion: "Calle 10, Santiago", telefono: 5555319 },
    { nombre: "Decoración Ideal", direccion: "Av. Brasil 400, Valparaíso", telefono: 5554208 },
    { nombre: "Cafetería Sabor", direccion: "Calle Mayor 22, Madrid", telefono: 5553197 },
    { nombre: "Juguetes y Sueños", direccion: "Calle de la Luna 77, La Paz", telefono: 5552086 },
    { nombre: "Cuidado Personal", direccion: "Calle Figueroa 100, San José", telefono: 5550975 },
    { nombre: "Artículos de Oficina", direccion: "Calle Comercio 55, Caracas", telefono: 5559864 },
    { nombre: "Todo para el Hogar", direccion: "Av. San Martín 500, Buenos Aires", telefono: 5558753 }
]
;

//ejecutamos la funcion de mongoose de insert many
Tienda.insertMany(tiendas)