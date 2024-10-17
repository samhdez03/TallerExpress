import { Router } from "express"
import {employeByPosition, allEmploye, employeeBySalaryRange} from "../controllers/employees/read.js"
import {create,createMany} from "../controllers/employees/create.js"

const router = Router()

router.get("/all", allEmploye)
router.get("/position/:position", employeByPosition)
router.get('/salary/:minSalary/:maxSalary', employeeBySalaryRange)
router.post("/create", create)
router.post("/createMany", createMany)

export default router