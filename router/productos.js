import { Router } from "express";
import {productoPorMarca, productoPorTipo, allProductos} from "../controllers/producto/read.js";

const router = Router();

router.get("/all", allProductos)
router.get("/marca/:marca", productoPorMarca)
router.get('/tipo/:tipo', productoPorTipo);


export default router;