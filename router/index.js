import { Router } from "express";
import tiendasRouter from "./tiendas.js";
import empleadosRouter from "./empleados.js";
import productosRouter from "./productos.js";


const router = Router();

router.use("/empleados", empleadosRouter)
router.use("/tiendas", tiendasRouter)
router.use("/productos", productosRouter)
export default router;