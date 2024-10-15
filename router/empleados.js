import { Router } from "express";
import {empleadoPorCargo, allEmpleados, empleadosPorRangoSalario} from "../controllers/empleados/read.js";

const router = Router();

router.get("/all", allEmpleados)
router.get("/cargo/:cargo", empleadoPorCargo)
router.get('/salario/:minSalario/:maxSalario', empleadosPorRangoSalario);


export default router;