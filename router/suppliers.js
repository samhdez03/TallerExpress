import { Router } from "express";
import { allSupliers, supplierByContact, typeOfProducts } from "../controllers/suppliers/read.js";
import { create, createMany } from "../controllers/suppliers/create.js";

const router = Router();

router.get("/all", allSupliers)
router.get("/contact/:contact", supplierByContact)
router.get('/typeOfProducts/:type', typeOfProducts);
router.post("/create", create)
router.post("/createMany", createMany)

export default router;