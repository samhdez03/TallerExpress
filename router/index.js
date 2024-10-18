import { Router } from "express";
import storesRouter from "./stores.js";
import employeesRouter from "./employees.js";
import productsRouter from "./products.js";
import memberRouter from "./members.js";
import supplierRouter from "./suppliers.js";


const router = Router();

router.use("/employees", employeesRouter)
router.use("/stores", storesRouter)
router.use("/products", productsRouter)
router.use("/members", memberRouter)
router.use("/suppliers", supplierRouter)
export default router;