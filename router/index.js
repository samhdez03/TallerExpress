import { Router } from "express";
import storesRouter from "./stores.js";
import employeesRouter from "./employees.js";
import productsRouter from "./products.js";


const router = Router();

router.use("/employees", employeesRouter)
router.use("/stores", storesRouter)
router.use("/products", productsRouter)
export default router;