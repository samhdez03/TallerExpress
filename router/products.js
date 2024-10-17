import { Router } from "express";
import {productByBrand, productByType, allProducts} from "../controllers/products/read.js";
import {create,createMany} from "../controllers/products/create.js";

const router = Router();

router.get("/all", allProducts)
router.get("/brand/:brand", productByBrand)
router.get('/type/:type', productByType);
router.post("/create", create)
router.post("/createMany", createMany)

export default router;