import { Router } from "express";
import {allTiendas, tiendaPorDireccion, tiendaPorNombre} from "../controllers/tienda/read.js";

const router = Router();

router.get("/all", allTiendas)
router.get("/nombre/:tipo", tiendaPorNombre)
router.get('/direccion/:direccion', tiendaPorDireccion);


export default router;